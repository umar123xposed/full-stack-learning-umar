import React, { useState } from 'react'

const Events = () => {
    const [state, setstate]= useState('umar')
    const namechange=(name)=> setstate(name)
    const [num, setnum]= useState(0)

  return (
    <div>
      <h1>{state}</h1>
      <h1>{num}</h1>
      <button onClick={()=>namechange('hussain')}>name</button>
      <button onClick={()=>setnum(num+1)}>number</button>
    </div>
  )
}

export default Events
