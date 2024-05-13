import React from 'react'
import Header from './components/Header/Header'
import TopContaine from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
      <Header />
      <TopContaine/>
     <SkillContainer/>
    <ProjectContainer/>
    <ExperienceContainer/>
    <Contact/>
    </>

  )
}

export default App