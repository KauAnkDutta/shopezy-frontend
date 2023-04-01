import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Register.css";
import { toast } from "react-toastify";
import { registerUser } from "../API/AuthApi";
import logo from "../images/logo-ms.png";

function Register() {
  const [usernamefocused, setUsernameFocused] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [mobileFocus, setMobileFocus] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // register
  const registerHandler = (e) => {
    try {
      e.preventDefault();
      registerUser(user);
    } catch (error) {
      toast.error(error.response.message);
    }
  };

  return (
    <div className="register-main-container">
      <NavLink to={`/`} style={{ textDecoration: "none" }}>
        <img src={logo} className="signUpLogo" />
      </NavLink>

      <div className="register-sub-container">
        <div className="register-container">
          <h1 className="registerLogo">Sign-up</h1>

          <form className="registerForm" onSubmit={registerHandler}>
            <div className="register-input-label-container">
              <h5>Name</h5>

              <input
                type="text"
                name="name"
                id="name"
                className="register-input"
                value={user.name}
                onChange={readValue}
                placeholder="Full Name"
                required
                pattern="[A-Za-z0-9 ]{3,16}$"
                onBlur={() => setUsernameFocused(true)}
                focused={usernamefocused.toString()}
              />

              <span className="error-msg">
                Username should be 3-16 characters and shouldn't include any
                special character!
              </span>
            </div>

            <div className="register-input-label-container">
              <h5>Email</h5>

              <input
                className="register-input"
                type="text"
                name="email"
                id="email"
                value={user.email}
                onChange={readValue}
                placeholder="Email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                onBlur={() => setEmailFocus(true)}
                focused={emailFocus.toString()}
                required
              />

              <span className="error-msg">
                It should be a valid email address!
              </span>
            </div>

            <div className="register-input-label-container">
              <h5>Mobile</h5>

              <input
                className="register-input"
                type="text"
                name="mobile"
                id="mobile"
                value={user.mobile}
                onChange={readValue}
                placeholder="Mobile"
                onBlur={() => setMobileFocus(true)}
                focused={mobileFocus.toString()}
                required
              />

              <span className="error-msg">Enter Mobile Number</span>
            </div>

            <div className="register-input-label-container">
              <h5>password</h5>

              <input
                className="register-input"
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={readValue}
                placeholder="Password"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                required
                onBlur={() => setPasswordFocus(true)}
                focused={passwordFocus.toString()}
              />

              <span className="error-msg">
                Password should be 8-20 characters and include at least 1
                letter, 1 number and 1 special character!
              </span>
            </div>

            <button type="submit" className="registerBtn">
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
