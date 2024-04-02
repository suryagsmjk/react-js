import React, { useReducer } from 'react';
import '../src/Css/Reducer.css'


const CountReducer = (state, action) => {
    switch (action.type) {
        //normal type access
        // case "inc1":
        //     return state + 1;
        // case "dec1":
        //     return state - 1;
        // case "inc10":
        //     return state + 10;
        // case "dec10":
        //     return state - 10;
        // case "restart":
        //     return state-state;
        // default:
        //     return state;

        //playload type accesss this the best way reducer use
        case "inc":
            return state + action.playload;
        case "dec":
            return state - action.playload;
        case "restart":
            return state - state;
        default:
            return state;
    }
}

function Reducer() {
    const [count, dispatch] = useReducer(CountReducer, 0)
    return (
        <>

            <div style={{ backgroundColor: "black", color: "white", textAlign: "center", width: "50%", margin: "auto"}}>
                <h1>This is useReducer() Hook</h1>
                <h1 id='count'>{count}</h1>
                <div style={{ padding: "20px", justifyContent: "space-around", display: "flex"}}>
                    {/* normal type access */}
                    {/* <button onClick={() => dispatch({ type: "inc1" })}>INC 1</button>
                    <button onClick={() => dispatch({ type: "dec1" })}>DEC 1</button>
                    <button onClick={() => dispatch({ type: "restart" })}>Default</button>
                    <button onClick={() => dispatch({ type: "inc10" })}>INC 10</button>
                    <button onClick={() => dispatch({ type: "dec10" })}>DEC 10</button> */}

                    {/* //playload type accesss this the best way reducer use */}
                    <button id='btn' onClick={() => dispatch({ type: "dec", playload: 1 })}>DEC 1</button>
                    <button id='btn' onClick={() => dispatch({ type: "inc", playload: 1 })}>INC 1</button>
                    <button id='btn' onClick={() => dispatch({ type: "restart" })}>ReStart</button>
                    <button id='btn' onClick={() => dispatch({ type: "inc", playload: 10 })}>INC 10</button>
                    <button id='btn' onClick={() => dispatch({ type: "dec", playload: 10 })}>DEC 10</button>
                </div>

            </div>

        </>
    )
}

export default Reducer