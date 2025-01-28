import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Add Axios interceptor for authorization header
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        if (!token) {
            navigate('/login');
        } else {
            axios
                .get(`${import.meta.env.VITE_BASE_URL}/users/profile`)
                .then((response) => {
                    if (response.status === 200) {
                        setUser(response.data);
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    localStorage.removeItem('token');
                    navigate('/login');
                });
        }

        // Cleanup interceptor on unmount
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, [token, navigate, setUser]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectWrapper;
