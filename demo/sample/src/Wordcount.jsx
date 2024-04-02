import React, { useState } from 'react'

const Wordcount = (props) => {

    const UpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const LowClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const HandleOnChange = (event) => {
        setText(event.target.value)
    }
    const [Text, setText] = useState('');

    return (
        <>
            <div>
                <div className='md-3'>
                    <label for='textBox' className='form-lable'>{props.head}</label>
                    <textarea className='form-control' id='textBox' value={Text} onChange={HandleOnChange}></textarea>
                </div>
                <button onClick={UpClick}> Change to UpperCase</button>
                <button onClick={LowClick}> Change to LowerCaseCase</button>
            </div>
            <div>
                <h5> {Text.split(" ").length} Words and {Text.length} Characters</h5>
            </div> 
        </>
    )
}

export default Wordcount