import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"
const Menu = () => {
  return (
    <div id="Menu">
      <div className="container">
        <div className="home">
          <div className="Burger">
            <Link to={"/Menu"}>Profile</Link>
            <Link to={"/Products"}>Products</Link>
            <Link to={"/Registartion"}>Registartion</Link>
            <Link to={"/Menu"}>Accaount & Setup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// "Profile", "Your Apps", "Registartion";
export default Menu;
