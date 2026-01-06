import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div className="sitelogo">Logo</div>
        <ul className="secdash">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/user/manage/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">
              <button className="btn">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
