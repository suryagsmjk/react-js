import React, { useContext } from 'react'
import StudentsContext from '../Context/StudentsContext'
import { useMern } from '../Context/MernContext';
function Mern() {
    let studentData = useContext(StudentsContext)
    console.log(studentData);

    let {course,setCourse}=useMern()
    console.log(course);

    return (
    <>
        <h1> This is Mern Course taken by {" "+ studentData.name} from {" "+studentData.Address}</h1>
    
    <div>
        {
            course.map(e=>{
                return <li>{e}</li>
            })
        }
    </div>
    
    
    </>
  )
}

export default Mern