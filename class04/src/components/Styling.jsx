import React from 'react'
import Style from '../custom.module.css'
const Styling = () => {
   const cars = ['mahran', 'alto', 'cultus', 'corolla', 'civic']

    const list=[{id:'1', name:'umar'},{id:'2', name:'hassan'},{id:'3', name:'ayesha'}]
    
  return (
    <>
    <div>
        {/* inline styling */}
      {cars.map((e)=>(
        <h1 style={{'backgroundColor':'green', 'color':'white'}} key={e}>{e}</h1>
  ))}
    </div>
    {list.map((e)=>(
      <><div className='heading'>{e.id}</div>
      <span className='span'>{e.name}</span></>
    ))}
    </>
  )
}


export default Styling
