import React from "react";
import Logo from "../images/logo.jpeg";

const Navbar = ({ currentUser, logout, login }) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="Family Tree Home" />
          </a>
        </div>
        {currentUser.isAuthenticated ? (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button onClick={logout}>Log out</button>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">Sign up</a>
            </li>
            <li>
              <button onClick={login} to="/signin">
                Log in
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
