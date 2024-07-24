import Logo from "../assets/t_logotransparent.png";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <nav className="bg-blue-500 z-40 w-full top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Minals Logo" style={{ width: "80px" }} />
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex justify-between gap-16 text-sm text-white">
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/">Create Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
