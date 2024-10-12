import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/auth';
import { useParams, useNavigate } from 'react-router-dom';
import './FormStyles.css';

const EditUser = () => {
    const { userId } = useParams();
    const [formData, setFormData] = useState({ username: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const result = await getUser(userId);
            setFormData({ username: result.username, email: result.email });
        };
        fetchUser();
    }, [userId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(userId, formData);
        navigate('/users');
    };

    return (
        <div className="form-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditUser;
