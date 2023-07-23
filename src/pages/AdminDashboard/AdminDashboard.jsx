import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
    const navigate = useNavigate()

    const logout = async () => {
        try {
            const apiToken = localStorage.getItem('apiToken');

            const headers = {
                Authorization: `Bearer ${apiToken}`,
            };
            await axios.post('https://leadsapi.backendz.co/public/api/logout', null, { headers });

            localStorage.removeItem('apiToken');

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>AdminDashboard

            <button onClick={logout}>Logout</button>
        </div>

    )
}

export default AdminDashboard