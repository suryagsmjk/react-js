import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Conponents/Home';
import About from './Conponents/About';
import Contact from './Conponents/Contact';
import ErrorPage from './Conponents/ErrorPage';
import Login from './Conponents/Login';
import Nav from './Conponents/Nav';
import Courses from './Conponents/Courses';
import Python from './Conponents/Courses/Python';
import Mern from './Conponents/Courses/Mern';
import Devops from './Conponents/Courses/Devops';
import Java from './Conponents/Courses/Java';


function App() { 
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/*' element={<ErrorPage />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          
          <Route path='courses' element={<Courses/>}> 
          <Route path='Mern' element={<Mern/>}></Route>
          <Route path='Java' element={<Java/>}></Route>
          <Route path='python' element={<Python/>}></Route>
          <Route path='Devops' element={<Devops/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App