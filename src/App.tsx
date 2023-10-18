import Router from "./Router.tsx"
import NavBarComp from "./components/NavbarComp";
import ImpactCards from "./pages/ImpactCards/ImpactCards.tsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>Card component in process</h1>
        <NavBarComp />
        <Router/>
        <ImpactCards />
      </div>
    </>
  );
}

export default App;
