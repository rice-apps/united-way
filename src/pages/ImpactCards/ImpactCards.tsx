
import { CardInputs } from "./input";
import { CardImage } from "./cardStyles";

function ImpactCard({ imgURL, numData, unitText }: CardInputs) {
  return (
    <>
      <a className=" normal-case text-m">Impact Cards Page</a>
        <div className="card w-1/5 bg-base-100 shadow-md">
          <CardImage background={imgURL} />
          <div className="card-body">
            <h2 className="card-body">families</h2>
            <p>Got to support to achieve financial stability</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Donate</button>
            </div>
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

