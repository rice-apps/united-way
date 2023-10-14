
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
      
      export default ModalTest;