import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";



function EditModal({ closeHandler, editTask, dispatch }) {
    console.log(editTask);

    const [updateTask, setUpadateTask] = useState(editTask.task)
    const updateHandeler = () => {
        dispatch({
            type: "edit",
            payload: { task: updateTask, index: editTask.index }
        })
        closeHandler()
        
    }


    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <h2>Edit Your Task</h2>
                    <textarea cols={"40"} rows={"7"}
                        value={updateTask}
                        onChange={(e) => setUpadateTask(e.target.value)} >
                    </textarea>
                    <div className="modal-btn">
                        <button onClick={updateHandeler}>Update Task</button>
                        
                        <button onClick={closeHandler} >Close</button>
                    </div>
                    <h6 onClick={closeHandler} className='cross' > <IoCloseCircleOutline /> </h6>
                </div>
            </div>
        </>
    )
}

export default EditModal