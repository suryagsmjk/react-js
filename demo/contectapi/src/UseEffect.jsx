import React, { useEffect, useState } from 'react'

function UseEffect() {
   const [count,setcount]=useState(0);
   const[color,setcolor]=useState(true);
   const [count1,setcount1]=useState(0)
  useEffect(()=>{// executes after every render of the component 
    console.log("useEffect() without 2nd argument");
  })
  useEffect(()=>{//it will executes once after the initial render
    console.log("useEffect() with empty dependency");
  },[])
  useEffect(()=>{
    console.log("useEffect() with state or props dependency");
  },[count])
  useEffect(()=>{
    let interval=setInterval(()=>{
    console.log("useEffect90 with a return fuction");
    setcount1(count*100)
    },1000);
    return()=>{
        console.log("this is the clean-up function ");
        clearTimeout(interval)
    }
  })
    return (
    
    <>
    <h1>UseEffect() hook</h1>
    <h1>{count}</h1>
    {console.log("render method")}
    <button onClick={()=>{setcount(count+1)}}>inc count</button>
    <div style={{background:color ? "blue":"red",height:"100px",width:"100%",marginTop:"10px",textAlign:"center"}}>
        <button onClick={()=>{setcolor(!color)}}>change color</button>
    </div>
    </>
  )
}

export default UseEffect