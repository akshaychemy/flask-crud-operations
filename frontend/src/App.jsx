import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';

function App() {
    return (
        <Router>
            <div>
                {/* Navbar visible on all pages */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/edit/:userId" element={<EditUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
