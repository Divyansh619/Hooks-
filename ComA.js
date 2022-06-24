import React, { useState } from 'react'
import { useEffect } from 'react'


const ComA = () => {
    const [num, setNum] = useState(0)
    const [text, setText] = useState(0)


    useEffect(() => {
        return alert('i have been clicked')
    }, [text])
    return (
        <>
            <div>
                <button onClick={() => { setNum(num + 1) }}> Click Me {num} </button>
            </div>
            <div>
                <button onClick={() => { setText(text + 1) }}> Click Me {text} </button>
            </div>
        </>
    )
}

export default ComA