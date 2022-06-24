import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    if (action.type === "Increment") {
        return state + 1;
    }
    if (action.type === 'Decrement') {
        return state - 1;
    }
}

const ComD = () => {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div> {state}</div>
            <div>
                <button onClick={() => dispatch({ type: "Increment" })}>+</button>
                <button onClick={() => dispatch({ type: " Decrement" })}>-</button>
            </div >
        </>
    )
}

export default ComD