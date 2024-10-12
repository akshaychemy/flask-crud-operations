import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUsers();
            setUsers(result);
        };
        fetchData();
    }, []);

    const handleEdit = (userId) => {
        navigate(`/edit/${userId}`);
    };

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                        <div>
                            <button className="edit-btn" onClick={() => handleEdit(user.id)}>Edit      </button>
                            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
