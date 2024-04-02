import React, { useEffect, useRef, useState } from 'react'

function SsrTimer() {
    const [time, setTime] = useState(0)

    const [run, setRun] = useState(true);

    const Timer=useRef();

    useEffect(()=>{
        if(run){
            Timer.current=setInterval(() => {
                setTime( count => count+1)
            }, 10);
        }
        return ()=> clearInterval(Timer.current)
    },[run])
 const timeHandle =(time)=>{

    let hours=Math.floor(time/60/60%24)
    let min=Math.floor(time/60%60)
    let sec=Math.floor(time/60)
    let milsec=Math.floor(time%1000)

    hours=hours<10?'0'+hours:hours
    min=min<10?'0'+min:min
    sec=sec<10?'0'+sec:sec
    milsec=milsec<10?'0'+milsec:milsec

    return hours + ":"+min+":"+sec+":"+milsec
    
 }




    return (
        <>
            <div className="card col col-3 m-5 d-flex justify-centent-center align-item-center">
                <h1 className="ms-5">Timer Watch</h1>
                <h2 className="ms-5">{timeHandle(time)}</h2>
                <div className="button  m-5 ">
                    <button className="btn btn-outline-primary m-2" 
                    onClick={()=>{if(run) clearInterval(Timer.current)
                    setRun(!run)}}>{run?  "Stop":"Start"}</button>
                    {/* <button className="btn btn-outline-danger m-2">Stop</button> */}
                    <button className="btn btn-outline-warning m-2" onClick={()=>setTime(0)}>Restart</button>
                </div>
            </div>
        </>
    )
}

export default SsrTimer

// import React, { useState, useEffect } from 'react';

// function SsrTimer() {
//     const [seconds, setSeconds] = useState(0);
//     const [isActive, setIsActive] = useState(false);

//     useEffect(() => {
//         let interval = null;

//         if (isActive) {
//             interval = setInterval(() => {
//                 setSeconds(seconds => seconds + 1);

//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }

//         return () => clearInterval(interval);
//     }, [isActive, seconds]);

//     const handleStart = () => {
//         setIsActive(true);
//     };

//     const handleStop = () => {
//         setIsActive(false);
//     };

//     const handleRestart = () => {
//         setSeconds(0);
//         setIsActive(true);
//     };


//     return (
//         <>

//             <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "102px" }}>
//                 <h1>{seconds} seconds</h1>
            
//                     <button onClick={handleStart}>Start</button>
//                     <button onClick={handleStop}>Stop</button>
//                     <button onClick={handleRestart}>Restart</button>
//                 </div>
        

//         </>
//     )
// }

// export default SsrTimer