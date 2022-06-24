import React, { createContext, useState } from 'react'

import ComD from './ComD';

const FirstName = createContext();
const LastName = createContext();

const App = () => {



  return (
    <div>
      <FirstName.Provider value={'Peter'}>
        <LastName.Provider value={"Griffin"}>
          <ComD />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default App
export { FirstName, LastName }