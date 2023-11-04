import Router from "./Router";
import NavBarComp from "./components/NavbarComp";
import React from "react";
function App() {
  return (
    <>
      <div className="mb-4 ml-4">
        <NavBarComp />
        <Router />
      </div>
    </>
  );
}

export default App;
