import React from "react";
import './header.scss'

export default function header() {
  return (
    <header className="header">
        <div className="container header__container">
        <input className="visually-hidden" type="checkbox" id="hamburger-bar"/>
        <label for="hamburger-bar" class="hamburger-icons">
          <i class="bx bx-menu" id="menu"></i>
          <i class="bx bx-x" id="close"></i>
      </label>
        <nav className="navbar">
          <ul>
            <li><a href="#">Works</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
