import React, { useContext } from 'react'

import { FirstName, LastName } from './App'

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <div>
            <h2> My name is {fname} {lname} </h2>

        </div>
    )
}

export default ComB