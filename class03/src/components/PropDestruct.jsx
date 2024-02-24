import React from 'react'

const Giver = () => {
  return (
    <div>
    <Taker name='umar' class='3' />
    </div>
  )
}



import React from 'react'

// const Taker = (props) => {
//   return (
//     <div>
//       {props.name}{props.class}
//     </div>
//   )
// }

// const Taker = (props) => {
//     const[name, class]= props
//     return (
//       <div>
//         {name} {class}
//       </div>
//     )
//   }
const Taker = ({name1, class1}) => {
    return (
      <div>
        {name1}{class1}
      </div>
    )
  }

export default Taker



