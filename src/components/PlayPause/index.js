import React from 'react'

import {Play, Pause} from '../Icons'

import './style.css'

const PlayPause = props => (
  <div className="PlayPause">
    {
      props.isPlay ?
        <button
          className="PlayPause-btn"
          onClick={props.handleTogglePlay}
        >
          <Pause color="white" size={25} />
        </button>
        :
        <button
          className="PlayPause-btn"
          onClick={props.handleTogglePlay}
        >
          <Play color="white" size={25} />
        </button>
    }
  </div>
)

export default PlayPause
