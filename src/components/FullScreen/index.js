import React from 'react'

import { FullScreenIcon } from '../Icons';

import './style.css'

const FullScreen = props => (
  <button
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon
      color="white"
      size={25}
    />
  </button>
)

export default FullScreen
