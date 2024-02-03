import React from "react";
import { Link } from "react-router-dom";
import whitelogo from "../assets/whitelogo.png";
import blacklogo from "../assets/blacklogo.png";

function NavBarComp() {
  // let image = require("client/src/assets/uwgh-logo-black-transparent-bg.png");
  return (
    <>
      <div className="navbar bg-base-100 mt-2">
        {/* <a > */}
        <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          {" "}
          United Way Impact Calculator
        </Link>  </div>

        <div className="navbar-end">
        <div className="w-1/4">
        <picture>
  <source
    srcSet={whitelogo}
    media="(prefers-color-scheme: dark)"
  />
  <img
    src={blacklogo}
    alt="logo"
  />
</picture>
       
        </div>
        </div>
        {/* </a> */}
      </div>
    </>
  );
}

export default NavBarComp;
