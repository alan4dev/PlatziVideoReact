import React from 'react'

import './style.css'

const ProgressBar = props => (
  <div className="ProgressBar">
    <input
      type="range"
      min={0}
      max={props.duration}
      value={props.currentTime}
      onChange={props.handleProgressChange}
    />
  </div>
)

export default ProgressBar
