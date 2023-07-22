import React, { useState } from 'react';
import axios from 'axios';
import "../Login/Login.css"

const Logins = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post('https://leadsapi.backendz.co/public/api/login', loginData);

            if (response.data.success) {
                const { api_token } = response.data.result;
                localStorage.setItem('apiToken', api_token);

                setMessage('Login successful as admin');
            } else {
                setMessage('Invalid email or password. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred during login. Please try again later.');
        }
    };

    return (
        <section className='login-section'>

            <form className='login-form' onSubmit={handleLogin}>
                <h1>Admin Login</h1>
                <div className='login-input-controls'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='login-input-controls'>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='login-button' type="submit">Login</button>
                <p>{message}</p>
            </form>
        </section>
    );
};

export default Logins;


