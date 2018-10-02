import React from 'react'

import './style.css'

const VideoPlayer = props => (
  <div
    className="VideoPlayer"
    ref={props.setRef}
  >
    {props.children}
  </div>
)

export default VideoPlayer
