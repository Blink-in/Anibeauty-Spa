import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  // Set auth header if token exists
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Fetch user data if needed
      fetchUserData();
    }
  }, [token]);

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get('/api/admin/me');
      setUser(data.user);
    } catch (err) {
      logout();
    }
  };

  const register = async (formData) => {
    try {
      const { data } = await axios.post('/api/admin/register', formData);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const login = async (formData) => {
    try {
      const { data } = await axios.post('/api/admin/login', formData);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      navigate('/dashboard');
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};