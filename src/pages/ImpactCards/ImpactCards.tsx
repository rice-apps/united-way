
function ImpactCards() {
  return (
    <>
      <a className=" normal-case text-m">Impact Cards Page</a>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="./assets/donation.jpeg" alt="donation image" /></figure>
          <div className="card-body">
            <h2 className="card-title">Impact Card</h2>
            <p>Example daisyUI component import</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Donate</button>
            </div>
          </div>
        </div>

    </>
  );
}

export default ImpactCards;
