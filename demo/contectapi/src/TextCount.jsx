import React, { useEffect, useState } from 'react'
import '../src/Css/Reducer.css'
function TextCount() {
    const [text, setText] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {

        setCharCount(text.trim(" ").split("").filter(e => e != " ").length)
        setWordCount(text.trim().split(" ").filter(e => e != "").length)
        //    setWordCount (()=>{
        //     let str=text.trim()
        //     let count=1;
        //     for(let i=0;i<str.length;i++){
        //         if(str[i]==" "){
        //             count++;
        //         }
        //     }
        //     return count
        //    })



    }, [text])



    return (
        <>
            <div style={{ backgroundColor: "black", height: "400px", width: "389px", margin: "100px auto", boxShadow: "0 0 35px red" }}>
                <div>
                    <textarea rows={10} cols={50} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <h4 style={{ color: "white" }}> {text}</h4>
                    <h3 style={{ color: "white" }}>No.of Characters :{charCount}</h3>
                    <h3 style={{ color: "white" }}>No.of Words :{wordCount}</h3>
                    <button id='btn' onClick={() => setText(text.toUpperCase())}>UpperCase</button>
                    <button id='btn' onClick={() => setText(text.toLowerCase())}>LowerCase</button>
                    <button id='btn' onClick={() => setText(text.split("").reverse().join(""))}>Reverse </button>
                    <button id='btn' onClick={() => setText(text.split(" ").map((e) => { return e.split("").reverse().join("") }).join(" "))}>
                        Words Reverse </button>
                </div>

            </div>

        </>
    )
}

export default TextCount