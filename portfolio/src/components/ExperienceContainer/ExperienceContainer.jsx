import React from 'react'
import './ExperienceContainer.css'
import Experience from '../ExperienceBox/Experience'
const ExperienceContainer = () => {
    return (
        <div className='experienceContainer' id='experience'>
            <h1> Expererience</h1>
            <div className="box">
            <Experience number="10+" title='Clients' />
            <Experience number="3+" title='Peoject' style={{background:"#f46c08"}} />
            <Experience number="2+" title='Year Experience' />
            <Experience number="100+" title='Web Site Created' />
            </div>
        </div>
    )
}

export default ExperienceContainer