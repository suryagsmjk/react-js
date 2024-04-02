import React from 'react'
import StudentsContext from './Context/StudentsContext'
import Students from './Component/Students'
import Courses from './Component/Courses'
import { MernContextAPI } from './Context/MernContext'
import Reducer from './Reducer'
import UseEffect from './UseEffect'
import UseEffects2 from './UseEffects2'
import TextCount from './TextCount'
import FetchApi from './FetchApi'
import AxiosApi from './AxiosApi'
import AxiosGetMethod from './AxiosGetMethod'
import SsrTimer from './SsrTimer'

function App() {
  // let student={name:"Surya",Age:"23",Address:"Tamil Nadu"}
  return (
    <>
      {/* <Reducer/>
    <MernContextAPI>
      <StudentsContext.Provider value={student}>
      <Students/>
      <Courses/>
      <UseEffect/>
      <UseEffects2/>
      <TextCount/>
      <FetchApi/>
      <AxiosApi />
      </StudentsContext.Provider>
      </MernContextAPI> */}

      <SsrTimer/>
      <AxiosGetMethod/>
    </>
  )
}

export default App