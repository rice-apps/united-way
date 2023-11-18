import { CardInputs } from "./input";

function ImpactCard({ imgURL, numData, unitText, descText }: CardInputs) {
  return (
    <>
      <div className="card w-80 shadow-md bg-slate-600">
        <figure className="px-6 pt-6 m-0">
          <img src={imgURL} alt="donation img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center ">
          <h1 className="card-title text-5xl mb-0">{Math.round(numData)}</h1>
          <h2 className="card-body mb-0">{unitText}</h2>
          <p>{descText}</p>
        </div>
      </div>
    </>
  );
}
export default ImpactCard;
