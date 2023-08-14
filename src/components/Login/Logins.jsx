import { useState } from 'react';
import "../Login/Login.css"
import { useNavigate } from 'react-router';
import { useUserLoginMutation } from '../../features/auth/loginApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../../features/auth/LoginSlice';

const Logins = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [userLogin, { isLoading }] = useUserLoginMutation()
    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await userLogin(loginData).unwrap()
            localStorage.setItem("token", JSON.stringify(response.result.api_token));
            dispatch(setToken(response.result.api_token))
            if (response.success === true) {
                navigate('/admin-dashboard')
            }

        } catch (error) {
            console.log(error)
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
                <button className='login-button'
                    disabled={isLoading}
                    type="submit">Login</button>
            </form>
        </section>
    );
};

export default Logins;


