import React from 'react'

function Nav() {

    let Number = 0;
    const increment = () => {
        Number = Number + 1;
        console.log(Number);
    }
    const diccrement = () => {
        Number = Number - 1;
        console.log(Number);
    }
    return (
        <>
            <h1>This is function Component</h1>
            <h1> {Number}</h1>
            <button onClick={increment}> +</button>
            <button onClick={diccrement}> - </button>
        </>
    )
}

export default Nav