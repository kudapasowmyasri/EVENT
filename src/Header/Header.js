import React from 'react';
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="btn home-btn">Home </Link>
        <Link to="/login" className="btn nav-btn login-btn">Login

        </Link>
        <Link to="/signup" className="btn nav-btn signup-btn"> Signup
          
        </Link>
      </div>
    )
}

export default Header
