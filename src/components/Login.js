// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import Header from "./Header";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from reloading

        // If login is successful, navigate to the main page
        history.push('/onboarding');
    };

    return (
        <div>
            <Header />
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>

    );
}

export default Login;