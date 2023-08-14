import  { useState } from 'react';
import { useUserLoginMutation } from '../features/auth/loginApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/auth/LoginSlice';

const Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [userLogin , {isLoading}] = useUserLoginMutation()

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await userLogin(loginData)

            if (response.success === true) {
                console.log(response)
               dispatch(setToken(response.result.api_token))
            } else {
                // Login failed
                console.error('Login failed.');
            }
        } catch (error) {
           console.log(error)
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button 
            disabled={isLoading}
            type="submit">Login</button>
        </form>
    );
};

export default Login;
