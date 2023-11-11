
import { CardInputs } from "./input";

function ImpactCard({ imgURL, numData, unitText, descText }: CardInputs) {

  return (
          <div className="App">

            <a className="btn w-80 shadow-md" onClick={()=>document.getElementById('my_modal_1')!.showModal()}>
                <div className="card w-80 shadow-md" >
                  <figure className="px-6 pt-6 m-0">
                    <img src={imgURL} alt="donation img" className="rounded-xl"/>
                  </figure>
                  <div className="card-body items-center text-center m-0">
                    <h1 className="card-title text-5xl mb-0">{numData}</h1>
                    <h2 className="card-body mb-0">{unitText}</h2>
                    <p>{descText}</p>
                  </div>
                </div>
            </a>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                // here it should be able to take input: 
                <h3 className="font-bold text-lg">Here's what the *insert company* United Way campaign made possible last year.</h3>
                <ul>
                        <li>302 families got support to achieve financial stability</li>
                        <li>494 young people helped to succeed in school and in life</li>
                        <li>1,682 people recieved physical and behavioral health care support</li>
                        <li>134 people got support to escape violent situations</li>
                        <li>634 people got support with basic needs like food, housing, and transportation</li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
  );
}
export default ImpactCard