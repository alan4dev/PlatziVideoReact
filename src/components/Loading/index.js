import React from 'react'

import './style.css'

const Loading = props => {
  if(!props.active) return null
  
  return(
    <div className="Loading" >
      <h2>Loading...</h2>
    </div>
  )
}

export default Loading
