
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

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 에러(인증 실패) 발생 시 자동으로 토큰 갱신 시도
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          // 토큰 갱신 중 발생하는 요청들을 대기열에 추가
          await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
          return api(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.get("/auth/token/refresh/");
        // 토큰 갱신 성공 시 대기열에 있던 요청들을 다시 보냄
        processQueue();
        return api(originalRequest);
      } catch (refreshError) {
        // 토큰 갱신 실패 시 로그인 페이지로 이동 (단, 로그인 페이지와 작품 상세 페이지는 제외)
        processQueue(refreshError);
        if (
          window.location.pathname !== "/login" &&
          !window.location.pathname.startsWith("/items")
        ) {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;

