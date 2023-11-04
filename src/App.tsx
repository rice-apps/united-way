import Router from "./Router.tsx"
import NavBarComp from "./components/NavbarComp";
import ImpactCards from "./pages/ImpactCards/ImpactCards.tsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>Card component in process</h1>
        <h2> props: imgURL, numData, unitTxt, descTxt</h2>
        <NavBarComp />
        <Router/>
        <ImpactCards imgURL = {"smstr"} numData = {1213} unitText = {"hi"} descText= {"hi"}/> 
      </div>e
    </>
  );
}

export default App;

//imgURL = {"smstr"} numData = {"import from Somewhere"} unitTxt = "unit text" descTxt = " description text for the card"
//  function App() {
//   return (
//     <div className="App">
//       <h1>Card component</h1>
//       <h2>props: title, date, and img</h2>

//       <CardContainer> // <- hannah's carousal
//         <Card title={"hello world"} date={1} imgUrl={img1} />
//         <Separator />
//         <Card title={"My Card"} date={2} imgUrl={img2} />
//       </CardContainer>
//     </div>
//   );
// }
