
// button is yelling at me saying that the element might be null and show modal
// doesn't exist, but it runs fine
function ModalTest() {
    // var elem = document.getElementById('my_modal_1')!
    // var onClick = (elem).showModal()

    return (
            <div className="App">
                    <button className="btn" onClick={()=>document.getElementById('my_modal_1')!.showModal()}>open modal</button>
                            <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click outside to close</p>
                            </div>
                    <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    </form>
                    </dialog>
            </div>
    );
  }

function ResultsModal() {
    return (
            <div className="App">
                    <button className="btn" onClick={()=>document.getElementById('my_modal_1')!.showModal()}>You make it all possible!</button>
                            <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
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
  
const modalFuncs = {
    ResultsModal,
    ModalTest
  }
  
  export default modalFuncs;
    //     export default ResultsModal