import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import "./Nav.css";
import { useNavigate, Link } from "react-router-dom";

export default function Nav() {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?query=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show ? 'nav__black' : ''}`}>
      <Link to="/">
        <img
          className='nav__logo'
          src={logo}
          alt="stephenpbrown_logo"
        />
      </Link>
      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="search"
      />
      <div className='logo_container'>
        <FaRegUserCircle size={'2.6rem'}/>
        <PiCookingPotBold size={'2.6rem'}/>
      </div>
    </nav>
  );
}