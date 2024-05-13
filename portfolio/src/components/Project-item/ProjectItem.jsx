import React, { useState } from 'react'
import './ProjectItem.css'
const ProjectItem = ({ img, title, description, link }) => {
    const [show, setShow] = useState(false)
    return (
        <a href={link}>
            <div className='project'
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                {show ? (
                    <div className='project_content'>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                ) : (
                    <img src={img} />
                )}
            </div>
        </a>
    )
}

export default ProjectItem
