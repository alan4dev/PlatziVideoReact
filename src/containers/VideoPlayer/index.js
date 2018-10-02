import React, {Component} from 'react'

import VideoPlayerLayout from '../../components/VideoPlayer'
import Video from '../../components/Video'
import Title from '../../components/Title'
import Controls from '../../components/Controls'
import Loading from '../../components/Loading'

import {formatTime} from '../../utilities/formatTime'

class VideoPlayer extends Component {
  state = {
    isPlay: false,
    durationFormated: 0,
    currentTimeFormated: 0,
    isLoading: false,
    defaultVolume: 1
  }
  
  handleTogglePlay = () => {
    this.setState({
      isPlay: !this.state.isPlay
    })
  }

  handleLoadedMetadata = ev => {
    this.video = ev.target
    this.setState({
      durationFormated: formatTime(this.video.duration),
      duration: this.video.duration
    })
  }

  handleTimeUpdate = ev => {
    this.setState({
      currentTimeFormated: formatTime(this.video.currentTime),
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = ev => {
    this.video.currentTime = ev.target.value
  }

  handleSeeking = ev => {
    this.setState({
      isLoading: true
    })
  }
  
  handleSeeked = ev => {
    this.setState({
      isLoading: false
    })
  }

  handleVolumeChange = ev => {
    this.video.volume = ev.target.value
    this.setState({
      defaultVolume: ev.target.value
    })
  }

  handleFullScreenClick = ev => {
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setRef = el => {
    this.player = el
  }

  componentDidMount() {
    this.setState({
      isPlay: this.props.autoPlay
    })
  }

  render() {
    return(
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Video
          autoPlay={this.props.autoPlay}
          isPlay={this.state.isPlay}
          src={this.props.src}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
        <Loading active={this.state.isLoading} />
        <Controls
          handleTogglePlay={this.handleTogglePlay}
          isPlay={this.state.isPlay}
          duration={this.state.duration}
          durationFormated={this.state.durationFormated}
          currentTime={this.state.currentTime}
          currentTimeFormated={this.state.currentTimeFormated}
          handleProgressChange={this.handleProgressChange}
          handleVolumeChange={this.handleVolumeChange}
          handleFullScreenClick={this.handleFullScreenClick}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
