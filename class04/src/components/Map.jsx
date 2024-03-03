import React from 'react'

const Map = () => {

    // const cars = ['mahran', 'alto', 'cultus', 'corolla', 'civic']
    // // cars.map((e)=>{
    // //     console.log(e);
    // // })

    const list=[{id:'1', name:'umar'},{id:'2', name:'hassan'},{id:'3', name:'ayesha'}]
    
  return (
    <>
    {/* <div>
      {cars.map((e)=>(
        <h1 key={e}>{e}</h1>
  ))}
    </div> */}
    {list.map((e)=>(
      <><div>{e.id}</div>
      <span>{e.name}</span></>
    ))}
    </>
  )
}

export default Map