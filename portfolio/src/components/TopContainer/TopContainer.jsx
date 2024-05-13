import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import './TopContainer.css'
const TopContaine = () => {
    return (
        <>
            <Element id="home" className="topcontainer">
                <TopContent/>
                
            </Element>
        </>
    )
}
export default TopContaine