import React, { useEffect, useState } from 'react'

function State() {
 const [name, setname]= useState('umar')
 const [array, setarray]= useState(['car', 'bike', 'plane'])

 const[state, setstate]=useState('class01')
 useEffect(()=>{
    setstate('class 02')

 },[])
  return (
    <div>
      <h1>hi{name}</h1>
      <h1>these are the vehicle names {array}</h1>
      <h1>this is {state}</h1>
    </div>
  )
}

export default State
