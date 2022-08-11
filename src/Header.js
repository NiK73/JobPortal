import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header(props) {
  const getCount = () => {
    let count = 0;
    props.cartItems.forEach((item) => {
      count += parseInt(item.available);
    });
    return count;
  };

  return (
    <div className="Header">
      {/* Logo */}
      <Link to="/">
        <div className="Header-logo">
          <img
            src={
              "https://play-lh.googleusercontent.com/ayO090J2XIVy_jhLLvWuENhl_KQvTqB1EQUjpxjcYuKZ_uEYDTW6ZBPaPUtI2lMRBvA"
            }
          />
        </div>
      </Link>
      <div className="Header-navItems">
        {/* Login name */}
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello, User</span>
          <span className="Header-optionLineTwo">SignIn / LogIn</span>
        </div>
        {/* Orders */}
      </div>
    </div>
  );
}

export default Header;
