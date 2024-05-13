import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
const TopContent = () => {
  return (
    <>
        <div className="topcontent">
            <div className="topcontent_container">
                <h1 className="">Mr.G SURYA</h1>
                <p> A Professional Web and App Develooper</p>
                <a href='../../assets/SpiderMan/SURYA.png'download={"surya"}>
                    <button className='download'>Download CV</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                <button className='work'>My Works</button></Link>
            </div>
        </div>
    </>
  )
}

export default TopContent