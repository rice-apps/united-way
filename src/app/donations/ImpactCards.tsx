import Image from "next/image"

type CardInputs = {
  imgURL: string
  numData: number
  unitText: string
  descText: string
}

function ImpactCard({ imgURL, numData, unitText, descText }: CardInputs) {
  return (
    <>
      <div className="card shadow-md w-96 h-96 bg-base-100">
        <figure className="px-6 pt-6 m-0">
          <Image
            src={imgURL}
            alt="donation img"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h1 className="card-title text-3xl my-0 gradient-txt">
            {Math.round(numData)} {unitText.toLowerCase()}
          </h1>
          <p>{descText}</p>
        </div>
      </div>
    </>
  )
}
export default ImpactCard
