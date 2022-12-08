
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserOne } from "../redux/gameSlice"
function Modal() {

    const [name, setname] = useState();
    const dispatch = useDispatch();
    function handleSubmit(e) {

        e.preventDefault();
        if (!name) return
        dispatch(getUserOne(name));
        document.querySelector(".form-control").value = ""
    }
    return (
        <>
        
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} />
                                <div className='text-end'><button data-bs-dismiss="modal" className='btn btn-primary w-25 mt-3'>Enter</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal