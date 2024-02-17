import React from 'react'
import Child from './child'

function Parent() {
    const name= 'umar'
    const name2='hasnain'
    const name3='ayesha'
  return (
    <div>
      <Child name={name}/>
      <Child name={name2}/>
      <Child name={name3}/>
          </div>
  )
}

export default Parent
