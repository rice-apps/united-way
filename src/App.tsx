import { Routes, Route } from "react-router-dom";
import NavBarComp from "./components/NavbarComp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="mb-4 ml-4">
        <NavBarComp />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
