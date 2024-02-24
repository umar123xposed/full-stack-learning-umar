import React from 'react'

function Destruct() {

const vehicle={
    make:'suzuki',
    name:'mehran',
    year:'2008',
    color:'white'
}
console.log(vehicle)

const car=['suzuki', 'mehran', 2008, 'white']

const destructCars=(param)=>{
    const [make, name, year, color]= param
    console.log(param)
    console.log(make)
    console.log(name)
    console.log(year)
    console.log(color)
}
const destructCars1=([make, name, year, color])=>{
    console.log(make)
    console.log(name)
    console.log(year)
    console.log(color)
}
destructCars1(car)
destructCars(car)

  return (
    <div>
      
    </div>
  )
}

export default Destruct

