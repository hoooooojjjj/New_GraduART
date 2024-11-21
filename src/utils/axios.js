import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 필수, 쿠키를 주고받기 위해 필요
});

let isRefreshing = false; // 토큰 갱신 중인지 여부
let failedQueue = []; // 갱신 중인 동안 실패한 요청들을 저장

const processQueue = (error = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

//요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 쿠키에서 access_token을 가져와 Authorization 헤더에 추가
    const token = document.cookie.split('; ').find(row => row.startsWith('access_token='));
    if (token) {
      const accessToken = token.split('=')[1];
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response, // 응답 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    // 401 에러가 발생하고 토큰 갱신을 아직 안한 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // 이미 토큰 갱신 중이라면 대기열에 요청을 추가
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest)); // 대기 중인 요청을 갱신된 토큰으로 다시 보냄
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // refresh token을 쿠키에서 가져옴
        const refreshToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('refresh_token='))
          ?.split('=')[1];

        if (!refreshToken) {
          throw new Error('Refresh token not found');
        }

        // 토큰 갱신 API 호출 시 refresh token을 함께 전송
        const response = await api.post("/auth/token/refresh/", {
          refresh_token: refreshToken
        });
        
        const { access_token } = response.data;
        
        // 쿠키에 새로운 access_token 저장
        document.cookie = `access_token=${access_token}; path=/; max-age=1800; secure`;

        // 대기 중인 요청들 다시 실행
        processQueue();
        
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        // 토큰 갱신 실패 시 로그인 페이지로 이동 (단, 로그인 페이지와 작품 상세 페이지는 제외)
        if (
          window.location.pathname !== "/signin" &&
          !window.location.pathname.startsWith("/items")
        ) {
          //window.location.href = "/signin";
        }
        // 토큰 갱신 실패 시 로그아웃 처리 (필요시)
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false; // 토큰 갱신 완료
      }
    }

    return Promise.reject(error);
  }
);

export default api;

