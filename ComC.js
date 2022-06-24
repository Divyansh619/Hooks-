import React from 'react'
import { FirstName, LastName } from './App'


const ComC = () => {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return <LastName.Consumer>
                        {(lname) => {
                            // return <h2> My name is {fname} {lname} </h2>
                        }}
                    </LastName.Consumer>
                }}
            </FirstName.Consumer>
        </div>
    )
}

export default ComC
