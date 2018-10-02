import React from 'react'

import PlayPause from '../PlayPause'
import ProgressBar from '../ProgressBar'
import Timer from '../Timer'
import Volume from '../Volume'
import FullScreen from '../FullScreen';

import './style.css'

const Controls = props => (
  <div className="Controls">
    <PlayPause
      isPlay={props.isPlay}
      handleTogglePlay={props.handleTogglePlay}
    />
    <Timer
      duration={props.durationFormated}
      currentTime={props.currentTimeFormated}
    />
    <ProgressBar
      duration={props.duration}
      currentTime={props.currentTime}
      handleProgressChange={props.handleProgressChange}
    />
    <Volume
      handleVolumeChange={props.handleVolumeChange}
    />
    <FullScreen
      handleFullScreenClick={props.handleFullScreenClick}
    />
  </div>
)

export default Controls
