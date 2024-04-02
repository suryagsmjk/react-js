import React, { useEffect, useState } from 'react'
import '../src/Css/Reducer.css'

function UseEffects2() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black")

    useEffect(() => {
        if (count < 0) setColor("gray")
        else if (count > 0 && count <= 5) setColor("red")
        else if (count == 6) setColor("yellow")
        else if (count >= 7 && count <= 10) setColor("blue")
        else if (count > 10) setColor("brown")
        else if (count == 15) setColor("purple")
        else setColor("black")
    })


    return (
        <>
            <div style={{ backgroundColor: color, height: "200px", width: "400px", margin: "100px auto", boxShadow: "0 0 35px red" }}>
                <h1 id='count' style={{ color: "white",textAlign:"center" }}>{count}</h1>
                <div id='btn1'>
                    <button id='btn2' onClick={() => setCount(count - 1)}> - </button>
                    <button id='btn2' onClick={() => setCount(count + 1)}> + </button>
                </div>

            </div>
        </>
    )
}

export default UseEffects2