import Router from "./Router.tsx"
import NavBarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <div className="mb-4 ml-4">
        <NavBarComp />
        <Router/>
      </div>
    </>
  );
}

export default App;
