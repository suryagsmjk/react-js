import React from 'react'
import { Link } from 'react-scroll'
import './Header.css';
function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <h1> Deve<span>loper</span></h1>
                </div>
                <div className="header__right">
                    <Link to='home' smooth={true} duration={500}>
                        <h4 style={{ color: "white" }}>Home</h4>
                    </Link>
                    <Link to='skills' smooth={true} duration={500}>
                        <h4 style={{ color: "white" }}>Skills</h4>
                    </Link>
                    <Link to='projects' smooth={true} duration={500}>
                        <h4 style={{ color: "white" }}>Projects </h4>
                    </Link>
                    <Link to='experience' smooth={true} duration={500}>
                        <h4 style={{ color: "white" }}>Experience</h4>
                    </Link>
                    <Link to='contact' smooth={true} duration={500}>
                        <h4 className='header__r-btn'> Join With Me</h4>

                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header