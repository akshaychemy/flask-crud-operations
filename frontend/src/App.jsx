import React, { useState, useEffect } from 'react';
import { register, login, getUsers, getUser, updateUser, deleteUser } from './api/auth';

function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await getUsers();
        setUsers(result);
    };

    const handleRegister = async () => {
        const userData = { username: 'test2', email: 'test2@test.com', password: 'password123' };
        await register(userData);
        fetchUsers();
    };

    const handleLogin = async () => {
        const userData = { email: 'test2@test.com', password: 'password123' };
        await login(userData);
    };

    const handleGetUser = async (userId) => {
        const result = await getUser(userId);
        setCurrentUser(result);
    };

    const handleUpdateUser = async (userId) => {
        const updatedData = { username: 'updatedTest', email: 'updated@test.com' };
        await updateUser(userId, updatedData);
        fetchUsers();
    };

    const handleDeleteUser = async (userId) => {
        await deleteUser(userId);
        fetchUsers();
    };

    return (
        <div>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => handleGetUser(1)}>Get User 1</button>
            <button onClick={() => handleUpdateUser(1)}>Update User 1</button>
            <button onClick={() => handleDeleteUser(1)}>Delete User 1</button>

            <h3>All Users:</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} - {user.email}</li>
                ))}
            </ul>

            {currentUser && (
                <div>
                    <h3>Current User:</h3>
                    <p>{currentUser.username} - {currentUser.email}</p>
                </div>
            )}
        </div>
    );
}

export default App;
