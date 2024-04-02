import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Color() {
    const color = useSelector((store) => store.colorReducer)
    const dispatch = useDispatch()
    const [textColor, setTextColor] = useState("")
    const [bgColor, setBgColor] = useState({ red: 0, green: 0, blue: 0 })

    return (
        <>
            <div style={{
                padding: "100px", width: "500px", justifyContent: "center", alignItems: "center", margin: "auto",
                backgroundColor: `rgb(${color.bgcolor.red},${color.bgcolor.green},${color.bgcolor.blue})`
            }}>

                <div>
                    <input type='text' placeholder='Enter Color Name' onChange={(e) => setTextColor(e.target.value)} />
                    <button onClick={() => dispatch({ type: "text", payload: textColor })} >Change Color</button>
                </div>

                <h1 style={{ color: color.textColor }}> React Application</h1>

                <div style={{ padding: " 10px 20px", display: "grid", width: "300px" }}>

                    <label >Red:</label><input type='number' placeholder='Enter a Number (0-255)'
                        onChange={(e) => setBgColor({ ...bgColor, red: e.target.value })} />
                        
                    <label >Green:</label><input type='number' placeholder='Enter a Number (0-255)'
                        onChange={(e) => setBgColor({ ...bgColor, green: e.target.value })} />

                    <label >Red:</label><input type='number' placeholder='Enter a Number (0-255)'
                        onChange={(e) => setBgColor({ ...bgColor, blue: e.target.value })} />
                </div>
                <button style={{ padding: " 10px 20px", margin: "10px 0 0 " }}
                    onClick={() => dispatch({ type: "bg", payload: bgColor })}> Change Background Color</button>
            </div>
        </>
    )
}

export default Color