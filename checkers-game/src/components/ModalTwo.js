import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserTwo } from "../redux/gameSlice"
function ModalTwo() {

    const [nameTwo, setnameTwo] = useState();
    const dispatch = useDispatch();
    function handleSubmitTwo(e) {
        e.preventDefault();
        if (!nameTwo) return
        dispatch(getUserTwo(nameTwo));
        document.querySelector(".form-control").value = ""
    }
    return (
        <>
            
            <div className="modal fade" id="exampleModalTwo" tabIndex="-1" aria-labelledby="exampleModalTwo" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Name</h1>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="modal-body">
                            <form onSubmit={(e) => handleSubmitTwo(e)}>
                                <input type="text" className='form-control' onChange={(e) => setnameTwo(e.target.value)} />
                                <div className='text-end'><button data-bs-dismiss="modal" className='btn btn-danger w-25 mt-3'>Enter</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalTwo