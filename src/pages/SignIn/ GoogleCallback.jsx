import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../utils/axios';

function GoogleCallback() {
  const navigate = useNavigate();
  const { setAuthData } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Google OAuth 콜백 URL에서 hash 값을 가져온다
        const hash = window.location.hash.substring(1);
        if (!hash) {
          navigate('/signin', { replace: true });
          return;
        }

        const params = new URLSearchParams(hash);
        const tokens = {
          access_token: params.get('access_token'),
          expires_at: params.get('expires_at'),
          expires_in: params.get('expires_in'),
          provider_token: params.get('provider_token'),
          refresh_token: params.get('refresh_token'),
          token_type: params.get('token_type')
        };

        if (!tokens.access_token || !tokens.refresh_token) {
          throw new Error('Invalid tokens');
        }

        // 서버로 전송하여 인증 처리
        const response = await api.post('/auth/google/callback/', tokens);
        
        if (response.status === 200) {
          const userResponse = await api.get('/auth/user/');
          await setAuthData(userResponse.data);
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.error('Google 로그인 처리 중 오류:', error);
        navigate('/signin', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, setAuthData]);

  return (
    <p>로그인 처리중...</p>
  );
}

export default GoogleCallback;
