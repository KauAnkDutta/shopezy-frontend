import React, { useState } from "react";
import "../style/navbar.css";
import { HiSearch, HiUserCircle } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import logo from "../images/logo.png";

import { useNavigate } from "react-router-dom";
import { useDataLayervalue } from "../DataLayer";
import axios from "axios";
import { toast } from "react-toastify";

function Header({ items }) {
  const [{ user, isLoggedIn }] = useDataLayervalue();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  // to calculate the total quantity of the cart
  const getTotalQuan = () => {
    let totalQuan = 0;
    items.map((item) => {
      return (totalQuan += item.quantity);
    });
    return totalQuan;
  };

  // to handel logout event
  const logoutHandler = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    window.location.href = "/";
  };

  const IfLogggedIn = () => (
    <>
      <div className="headerOption" onClick={() => navigate(`/`)}>
        <span className="optionLineOne">Hello,{user.name}</span>

        <button className="nav-logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );

  const IfLogggedOut = () => (
    <>
      <div className="headerOption">
        <span className="optionLineOne">Hello, Guest</span>
        <button className="nav-signin-btn" onClick={() => navigate(`/login`)}>
          Sign In
        </button>
      </div>
    </>
  );

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate(`/`)}>
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-search-section">
        <input
          type="text"
          className="searchInput"
          placeholder="Search For Anything..."
        />
        <i className="searchIcon">
          {" "}
          <HiSearch className="search-icon" />{" "}
        </i>
      </div>

      <ul className="navbar-links">
        <li className="icon">
          <div className="dropdown">
            {isLoggedIn ? (
              <span className="user-letter" onClick={() => setActive(!active)}>{user?.name[0]}</span>
            ) : (
              <i className="user">
                <HiUserCircle
                  className="user-icon"
                  onClick={() => setActive(!active)}
                />
              </i>
            )}

            {active ? (
              <div className="dropdown-item">
                {isLoggedIn ? <IfLogggedIn /> : <IfLogggedOut />}
              </div>
            ) : null}
          </div>
        </li>

        <li className="nav-link">
          <span
            className="optionLineOne"
            onClick={() => navigate(`/returnOrder`)}
          >
            Orders
          </span>
        </li>

        <li className="nav-link">
          <span className="optionLineOne">Wishlist</span>
        </li>

        <li className="nav-link">
          <div className="basketOption" onClick={() => navigate(`/checkout`)}>
            <i className="cartIcon">
              <BsCart2 className="cart" />
            </i>

            <span className="count">{getTotalQuan()}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
