import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/unitedenrgy-white.svg";
import { Menu, MenuBook } from "@mui/icons-material";
function Header() {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((link, index) => (
              // <Link to="/home">home</Link>
              <Link to={link.url} key={index}>
                {link.text}
              </Link>
            ))}
            {/* <Link to="/about">Go to About</Link> */}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icons">{Menu}</Menu>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
