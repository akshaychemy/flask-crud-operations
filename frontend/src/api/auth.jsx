import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};

export const getUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/users`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getUser = async (userId) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateUser = async (userId, updatedData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/users/${userId}`, updatedData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
