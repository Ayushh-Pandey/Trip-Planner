import React, { useContext, useState } from 'react'
import "./Login.css"
import { AuthContext } from '../../components/context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { userInputs } from "./formSource";

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const [account, toggleAccount] = useState('register');
    const [info, setInfo] = useState({});
    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleUser = async (e) => {
        e.preventDefault();
        const newUser = {
            ...info,
        };
        try {
            await axios.post("/auth/register", newUser);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate('/');
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
        }
    };

    const toggleSignup = () => {
        account === 'login' ? toggleAccount('register') : toggleAccount('login')
    }

    return <div className='login'>
        {
            account === 'login' ?
                <div className='lContainer'>
                    <input
                        type='text'
                        placeholder='username'
                        id='username'
                        onChange={handleChange}
                        className='lInput'
                    />
                    <input
                        type='text'
                        placeholder='password'
                        id='password'
                        onChange={handleChange}
                        className='lInput'
                    />
                    <button disabled={loading} onClick={handleClick} className='lButton'>Login</button>
                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>OR</span>
                    <button className='lButton' onClick={() => toggleSignup()}>Register</button>
                    {error && <span>{error.message}</span>}
                </div>
                :
                <div className='lContainer'>
                    {userInputs.map((input) => (
                        <div className='lContainer'>
                            <label >{input.label}</label>
                            <input className="lInput" onChange={handleRegister} type={input.type} placeholder={input.placeholder} id={input.id} />
                        </div>
                    ))}
                    <button disabled={loading} onClick={handleUser} className='lButton'>Sign up</button>
                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>OR</span>
                    <button className="lButton" onClick={() => toggleSignup()}>Already have an Account</button>
                    {error && <span>{error.message}</span>}
                </div>
        }

    </div>
}

export default Login;