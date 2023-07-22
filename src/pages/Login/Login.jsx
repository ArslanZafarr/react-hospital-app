// // Login.js
// import React, { useState } from 'react';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const loginData = {
//             email: email,
//             password: password,
//         };

//         try {
//             const response = await fetch('https://leadsapi.backendz.co/public/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(loginData),
//             });

//             if (response.ok) {
//                 // Login success
//                 // You may handle the response here, e.g., storing the token in state or local storage
//                 console.log('Login successful!');
//                 const data = await response.json(); // Parse the response body as JSON
//                 console.log("🚀 ~ file: Login.jsx:30 ~ handleLogin ~ data:", data)

//             } else {
//                 // Login failed
//                 console.error('Login failed.');
//             }
//         } catch (error) {
//             console.error('Error occurred during login:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


import React from 'react'
import Logins from '../../components/Login/Logins'

const Login = () => {
    return (
        <Logins />
    )
}

export default Login