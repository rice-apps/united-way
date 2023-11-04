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
      <div></div>
      <button className="btn" onClick={goHome}>GO HOME</button>
      <div></div>

      <div>
        Here's what the {companyName} United Way campaign* made possible last year:
      </div>
      <div>
        *based on campaign results of ${dollarRaised}
      </div>
      <div>
        [carousel would go here]
      </div>


      <button className="btn" onClick={shareResults}>SHARE YOUR RESULTS</button>

    </>
  );
}

export default Donation;