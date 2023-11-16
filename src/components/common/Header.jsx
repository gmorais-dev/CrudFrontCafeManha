import React from "react";
import "./style.css"

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <h1>Gui</h1>
        </a>
      </div>
      <div>
        <ul>
          <a href="/">
            <li>Inicio</li>
          </a>
          <a href="/insertCafe">
            <li>Adicionar Café</li>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
