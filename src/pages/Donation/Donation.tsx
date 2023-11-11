// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);

//“dollarsRaised”, “stability”, “development”, “healthcare”, “escape”, “basicNeeds”, “totalPeople”, "companyName"


let dollarRaised = 0;
let companyName = "TempComp";

function Donation() {
  const goHome = () => {
    window.location.href = '/';
  };

  const shareResults = () => {
    window.location.href = '/';
  };

  return (
    <>
      <a className=" normal-case text-m">Donation Page</a>
      <center>
        <button className="btn" onClick={goHome}>GO HOME</button>
      </center>
      
      <center>
        Here's what the {companyName} United Way campaign* made possible last year:
      </center>
      <center>
        *based on campaign results of ${dollarRaised}
      </center>
      <center>
        [carousel would go here]
      </center>

      <center>
        <button className="btn" onClick={shareResults}>SHARE YOUR RESULTS</button>
      </center>

    </>
  );
}

export default Donation;