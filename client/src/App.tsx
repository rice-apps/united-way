import Router from "./Router";
import NavBarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <div className="App">
        <NavBarComp />
        <Router />
      </div>
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
