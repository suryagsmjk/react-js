import React, { useRef } from 'react'

const Test = () => {

    const countRef = useRef(0);
    const h2Ref = useRef()

    const HandelClick = () => {
        console.log(countRef);
        countRef.current = countRef.current + 1;
        
        console.log(h2Ref);
        h2Ref.current.innerHTML =" WELCOME TO REACT"
      //  h2Ref.current.style.backgroundColor="red"
    }


    return (
       <>
        <h1> {countRef.current}</h1>
        <button onClick={HandelClick}>+</button>
        <h2 ref={h2Ref}> HELLO WORLD</h2>

       </>
    )
}

export default Test