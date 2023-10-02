import React, { Component } from "react";
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="#news" href="#news">
            News
          </a>
        </li>
        <li>
          <a className="#about" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="#contact" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
