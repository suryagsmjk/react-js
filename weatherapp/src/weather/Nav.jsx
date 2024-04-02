import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

function Nav() {
    return (
        <>
            <div className="nav">
                <h1 id='logo'>
                    <TiWeatherPartlySunny />
                </h1>
               <div className='search'>
               <input type='text' name='city' id='city' placeholder='Enter City...' ></input>
                <button> <FaSearch /> Search </button>
               </div>
            </div>
        </>
    )
}

export default Nav