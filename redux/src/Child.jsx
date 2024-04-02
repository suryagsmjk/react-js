import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './redux/action/CountAction'

function Child() {
    const count = useSelector((store) => store.countReducer)
    const dispatch = useDispatch()
    return (
        <>
            <h1> This is Our REDUX Consumer</h1>

            <div className="">
                <button onClick={() => dispatch(increment())}>+</button>
                <h1>{count}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

export default Child