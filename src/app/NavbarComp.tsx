import React from "react"
import Link from "next/link"
import Logo from "./Logo"

function NavBarComp() {
  return (
    <>
      <div className="navbar bg-base-100 mt-2">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            United Way Impact Calculator
          </Link>{" "}
        </div>

        <div className="navbar-end">
          <div className="w-1/4">
            <Logo />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBarComp
