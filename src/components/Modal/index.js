import React from 'react'

import './style.css'

function Modal(props) {
  return(
    <div className="Modal-overlay">
      <div className="Modal">
        {props.children}
        <button
          className="Modal-close"
          onClick={props.handleClick}
        />
      </div>
    </div>
  )
}

export default Modal
