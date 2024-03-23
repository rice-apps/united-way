import React from "react"
import Link from "next/link"
import Logo from "./Logo"

function NavBarComp() {
  return (
    <>
      <div className="navbar bg-base-100 mt-2">
        <div className="navbar-start">
        <div className="w-1/4">
        <a href="/">

          <Logo />
          </a>
          </div>
        </div>

        <div className="navbar-end">

          <Link className="btn btn-ghost normal-case text-xl" href="/admin">
            Admin Login
          </Link>{" "}

        </div>
      </div>
    </>
  )
}

export default NavBarComp
