import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaLightbulb, FaListUl, FaKeyboard } from "react-icons/fa";
import logo from "../assets/logo.png";
import letras from "../assets/letras.png";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="logo spin-slow" />
          <img src={letras} alt="Letras" className="letras" />
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} />
        </button>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/premio-teclado"><FaKeyboard size={24} /></Link>
          <Link to="/atajos-teclado"><FaLightbulb size={24} /></Link>
        </div>
        {/* <FaUserCircle size={32} className="user-icon" /> */}
      </nav>
      <hr className="divider" />
    </>
  );
}

export default NavBar;