import React from 'react'
import Nav from './Component/Nav'
import TodoMain from './Component/TodoMain'
import { TodoContext } from './context/TodoContext'

function App() {
  return (
    <>
      <TodoContext>
        <Nav />
        <TodoMain />
      </TodoContext>
    </>
  )
}

export default App