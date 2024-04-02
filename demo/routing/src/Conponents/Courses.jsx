import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../Css/Courses.css'

function Courses() {
  return (
    <>
      <div className="courses">
        <h2 align="center"> WELCOME TO  COURSES PAGE</h2>
      </div>
      <div className="main">
        <div className="courses-link">
          <Link to="MERN" className="links"><li>MERN</li></Link>
          <Link to="JAVA" className="links"><li>JAVA</li></Link>
          <Link to="Python" className="links"><li>PYTHON</li></Link>
          <Link to="DEVOPS" className="links"><li>DEVOPS</li></Link>
        </div>
        <div className="child">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default Courses