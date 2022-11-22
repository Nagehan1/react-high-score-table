import React from 'react'

function Players(props) {
  
  return (
    <div>
<ul>
    {props.names.map((name)=>{
        return(
        <li>{name.n}:{name.s} </li>)
    })}
</ul>
    </div>
  )
}

export default Players