import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/svg/logo.png";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen({ open: !open });
  };


    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={Logo} alt="Delight Villa" />
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>

          <ul
            className={open ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navbar;