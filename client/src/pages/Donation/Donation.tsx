// import { useLocation, useNavigate } from "react-router-dom"
// const location = useLocation();
// let json = JSON.parse(location.state);
import { useLocation} from "react-router-dom"
import Demo from "../../components/ImpactCarousel/ImpactCarousel";
//import Home2 from "../Home2/Home2";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

//“dollarsRaised”, “stability”, “development”, “healthcare”, “escape”, “basicNeeds”, “totalPeople”, "companyName"

function Donation() {
  const location = useLocation();
  let json = location.state.data;
  let dollarRaised =json["dollarsRaised"];
  let companyName = json["companyName"];
  const goHome = () => {
    window.location.href = "/";
  };

  const shareResults = () => {
    window.location.href = "/";
  };

  return (
    <>
      <a className=" normal-case text-m">Donation Page</a>
      <div></div>
      <button className="btn" onClick={goHome}>
        GO HOME
      </button>
      <div></div>

      <div>
        Here's what the {companyName} United Way campaign* made possible last
        year:
      </div>
      <div>*based on campaign results of ${dollarRaised}</div>
      <div>
        <Demo />
      </div>
      {/* <div>
        [carousel would go here]
        <Home2 />
      </div> */}

      <button className="btn" onClick={shareResults}>
        SHARE YOUR RESULTS
      </button>
    </>
  );
}

export default Donation;
