import React from "react";
import { Link } from "react-router-dom";
function NavBarComp() {
  return (
    <>
      <div className="navbar bg-base-100 mt-2">
        {/* <a > */}
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          {" "}
          United Way Impact Calculator
        </Link>
        {/* </a> */}
      </div>
    </>
  );
}

export default NavBarComp;
