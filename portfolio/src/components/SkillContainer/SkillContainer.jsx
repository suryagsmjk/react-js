import React from 'react';
import './SkillContainer.css';
import skillimg from '../../assets/SpiderMan/spider-skill.png';
import LinearProgress from '@mui/material/LinearProgress';

const SkillContainer = () => {
  return (
      <div className="skillContainer" id='skills'>
        <div className="skillContainer_image">
          <img src={skillimg} />
        </div>
        <div className="skillContainer_text">
          <h2>SKILL SET</h2>
          <div className="skillContainer_skillset">
            <h5>HTML</h5> 
                <div className="skill skill1">
                <LinearProgress variant="determinate" value={90} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>CSS</h5>
                <div className="skill skill2">
                <LinearProgress variant="determinate" value={80} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>BOOTSTRAP</h5>
                <div className="skill skill3">
                <LinearProgress variant="determinate" value={75} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>JAVA SCRIPT</h5>
                <div className="skill skill4">
                <LinearProgress variant="determinate" value={68} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>REACT JS</h5>
                <div className="skill skill5">
                <LinearProgress variant="determinate" value={65} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>NODE JS</h5>
                <div className="skill skill6">
                <LinearProgress variant="determinate" value={55} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>EXPRESS JS</h5>
                <div className="skill skill7">
                <LinearProgress variant="determinate" value={50} /> 
                </div>
          </div>
          <div className="skillContainer_skillset">
            <h5>MONGO DB</h5>
                <div className="skill skill8">
                <LinearProgress variant="determinate" value={45} /> 
                </div>
          </div>
        </div>
      </div>
    
  );
};

export default SkillContainer;




