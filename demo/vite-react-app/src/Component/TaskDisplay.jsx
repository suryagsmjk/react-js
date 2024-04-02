import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'
import EditModal from './EditModal'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function TaskDisplay({ tasks, dispatch, index }) {
  const [isModal, setIsModal] = useState(false)

  const [editTask, setEditTask] = useState({})

  const editHandler = (task, index) => {
    setIsModal(true)
    setEditTask({ task, index })
  }
  const closeHandler = () => {
    setIsModal(false)
  }
  return (
    <>
      <div className="container">
        {
          tasks.map((e, i) => {
            return (
              <div className="card">
                <h4>{e}</h4>
                <div className="buttons p-2">
                  <button onClick={() => dispatch({ type: "delete", payload: i })}
                    className='btn btn-outline-danger ms-5'> <MdDelete /> Delete</button>
                  <button onClick={() => editHandler(e, i)} className='btn btn-outline-primary ms-5'>
                   <FaEdit /> Edit</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="">
        {isModal && <EditModal closeHandler={closeHandler} editTask={editTask} dispatch={dispatch}></EditModal>}
      </div>

    </>
  )
}

export default TaskDisplay