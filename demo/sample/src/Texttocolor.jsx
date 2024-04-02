import React, { useState } from 'react'

const Texttocolor = () => {
    const [color,setcolor]=useState("")
  return (
    <div>
        <div style={{backgroundColor:color,height:"10vh"}} className="flex w-12">
        <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)}/>

        </div>
    </div>
  )
}

export default Texttocolor;