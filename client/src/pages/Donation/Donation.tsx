// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);

// import Demo from "../../components/ImpactCarousel/ImpactCarousel";
import Home2 from "../Home2/Home2";

import { useLocation } from "react-router-dom";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";

//“dollarsRaised”, “stability”, “development”, “healthcare”, “escape”, “basicNeeds”, “totalPeople”, "companyName"

let dollarRaised = 0;
let companyName = "TempComp";

function Donation() {
  const shareResults = () => {
    window.location.href = "/";
  };

  const location = useLocation();

  // console.log(location.state.data);
  const data = location.state.data;

  return (
    <>
      <div className="flex flex-col justify-center align-middle w-full">
        {/* <a className=" normal-case text-m mx-auto">Donation Page</a> */}
        <div className="flex flex-col mx-auto mb-5">
          <a className="text-xl font-semibold text-center">
            Here's what the {data.companyName} United Way campaign{" "}
          </a>
          <a className="text-lg font-semibold text-center">
            made possible last year
          </a>
          <a className="text-xl  text-center">
            Based on campaign results of{" "}
            <span className="font-bold text-2xl">${data.dollarsRaised}</span>
          </a>
        </div>
        <div className="mb-5">
          <ImpactCarousel
            dollarsRaised={data.dollarRaised}
            stability={data.stability}
            development={data.development}
            healthcare={data.healthcare}
            escape={data.escape}
            basicNeeds={data.basicNeeds}
            totalPeople={data.totalPeople}
          />
        </div>
        {/* <div>
        [carousel would go here]
        <Home2 />
      </div> */}

        <button
          className="btn btn-primary w-1/6 mx-auto"
          onClick={shareResults}
        >
          SHARE YOUR RESULTS
        </button>
      </div>
    </>
  );
}

export default Donation;
