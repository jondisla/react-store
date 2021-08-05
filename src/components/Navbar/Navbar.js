/** @format */

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-logo">
          KOMBUCHA
        </Link>
        <div className="nav-menu">
          <div className="nav-item active">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Products
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/presentations"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Story
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/manufacturing"
              className="nav-links"
            >
              Manufacturing
            </Link>
          </div>
          <div className="action-menu">
            <div className="nav-item">
            <AiOutlineSearch />
            </div>
            <div className="nav-item">
            <HiOutlineShoppingCart />
            </div>
            <div className="nav-item">
            <BiUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
