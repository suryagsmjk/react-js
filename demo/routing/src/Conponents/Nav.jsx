import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../Css/Nav.css'

function Nav() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="logo192.png" alt="logo" />
                </div>
                <div className="nav-links">

                    <Link to="/" className="links"><li> Home</li></Link>
                    <Link to="About" className="links"><li> About</li></Link>
                    <Link to="Contact" className="links"><li> Contac</li></Link>
                    <NavLink to="courses" className="links"><li> Courses</li></NavLink>

                </div>
                <div className="login">
                    <Link to="/login" className="links"><button> LOGIN </button></Link>
                </div>
            </div>
        </>
    )
}
export default Nav