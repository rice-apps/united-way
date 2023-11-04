
import { CardInputs } from "./input";
//import { CardImage } from "./cardStyles";
import { CSSProperties } from "react";
//import Tilt from "react-parallax-tilt";

function ImpactCard({ imgURL, numData, unitText, descText }: CardInputs) {

  const cardStyle : CSSProperties = {
    textAlign: "center", 
  };

  return (
    <>
        <div className="card w-80 shadow-md" style= {cardStyle}>
          <figure className="px-6 pt-6 m-0">
            <img src={imgURL} alt="donation img" className="rounded-xl"/>
          </figure>
          <div className="card-body items-center text-center m-0">
            <h1 className="card-title text-5xl mb-0">{numData}</h1>
            <h2 className="card-body mb-0">{unitText}</h2>
            <p>{descText}</p>
          </div>
        </div>
    </>
  );
}
export default ImpactCard

//export  const ImpactCard = ({ imgURL, numData, unitText }: CardInputs )=>

// function Home() {
//   return (
//     <>
//       <a className=" normal-case text-m">Home Page</a>
//     </>
//   );
// }

// export default Home;
//<figure><img src="./assets/donation.jpeg" alt="donation image" /></figure>

//  const Card = ({ title, date, imgUrl }: CardType) => {
//   return (
//       <CardWrapper>
//         <CardImage background={imgUrl} />
//         <CardTextWrapper>
//           <CardTextDate>{date} days ago</CardTextDate>
//           <CardTextTitle>{title}</CardTextTitle>
//           <CardTextBody>
//             Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
//             temporibus omnis illum maxime quod deserunt eligendi dolor
//           </CardTextBody>
//         </CardTextWrapper>
//         <CardStatWrapper>
//           {/* <CardStats>
//             <div>
//               1<sup>m</sup>
//             </div>
//             <div>read</div>
//           </CardStats> */}
//           <CardStats>
//             <LinkText href="#">website</LinkText>
//           </CardStats>
//           <CardStats>
//             <LinkText href="#">github</LinkText>
//           </CardStats>
//         </CardStatWrapper>
//       </CardWrapper>
//   );
// };

