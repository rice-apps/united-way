import React from "react";
import { Link } from "react-router-dom";
function NavBarComp() {
  return (
    <>
      <div className="navbar bg-base-100 mt-2">
        {/* <a > */}
        <div className="navbar-start"><Link className="btn btn-ghost normal-case text-xl" to="/">
          {" "}
          United Way Impact Calculator
        </Link></div>
        
        <div className="navbar-end">
        <Link className="btn btn-ghost normal-case text-xl" to="/adminlogin">
          {" "}
          Admin Login
        </Link>
        </div>
        {/* </a> */}
      </div>
    </>
  );
}

export default NavBarComp;
