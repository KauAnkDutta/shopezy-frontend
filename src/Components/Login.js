import React,{ useState } from "react";
import '../style/Login.css';
import { NavLink } from "react-router-dom";
import {toast} from 'react-toastify';
import {loginUser} from '../API/AuthApi';
import logo from '../images/logo-ms.png';

function Login(){
    const [user, setUser] = useState({
        email: '',
        password: ""
    })
    
    const readValue = (e) => {
        const {name, value} =e.target;
        setUser({...user, [name]:value})
    }

    const loginHandler = (e) => {
        try {
            e.preventDefault()
            loginUser(user)
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    return(
        <div className="login">
            <NavLink to={`/`} style={{textDecoration:"none"}}>
                <img src={logo} className="loginLogo"/>
            </NavLink>
            
            <div className="loginContainer">
                <h1>Sign-in</h1>

                <form className="loginForm" onSubmit={loginHandler}>
                    <h5 >Email</h5>
                    <input type="text" name='email' id='email' value={user.email} onChange={readValue}/>

                    <h5>Password</h5>
                    <input type="password" name='password' id='password' value={user.password} onChange={readValue}/>

                    <button type="submit" className="signInBtn">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the ShopEZY FAKE Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>

                <NavLink to={`/register`} className="createBtn">Create your ShopEZY Acount</NavLink>
            </div>
        </div>
    )
}

export default Login;