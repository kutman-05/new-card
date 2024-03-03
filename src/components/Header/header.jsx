import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="hero">
          <div className="header">
            <div className="header-nav">
              <Link
                style={{
                  fontSize: "30px",
                  marginLeft: "-6pc",
                  transition:"0,5sq",
                }}
                to={"/Menu"}
              >
                <IoMenu />
              </Link>
            </div>
            <h1>𝐊𝐮𝐭𝐂𝐚𝐫𝐝</h1>

            <Link
              style={{
                // position: "absolute",
                fontSize: "30px",
                marginLeft: "110vh",
              }}
              to={"/"}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
