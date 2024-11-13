import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/axios';

// Create context without TypeScript types
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                if (window.location.pathname === '/auth/callback') {
                    setLoading(false);
                    return;
                }

                const response = await api.get('/auth/user/');
                setUser(response.data);
                setIsAuthenticated(true);
            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const setAuthData = async (userData) => {
        return new Promise((resolve) => {
            setUser(userData);
            setIsAuthenticated(true);
            setLoading(false);

            setTimeout(() => {
                resolve();
            }, 0);
        });
    };

    const login = async (email, password) => {
        await api.post('/auth/login/', { email, password });
        const userResponse = await api.get('/auth/user/');
        await setAuthData(userResponse.data);
    };

    const logout = async () => {
        await api.get('/auth/logout/');
        setUser(null);
        setIsAuthenticated(false);
    };

    const googleLogin = () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        window.location.href = `${apiUrl}/auth/google/login/`;
    };

    const register = async (email, password, fullName) => {
        try {
            await api.post('/auth/register/', {
                email,
                password,
                full_name: fullName,
            });
            const userResponse = await api.get('/auth/user/');
            await setAuthData(userResponse.data);
        } catch (error) {
            console.error('AuthContext register error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                loading,
                login,
                logout,
                googleLogin,
                register,
                setAuthData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};