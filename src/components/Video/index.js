import React, {Component} from 'react'

import './style.css'

class Video extends Component {
  togglePlay(isPlay) {
    if(isPlay) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.isPlay !== this.props.isPlay) {
      this.togglePlay(nextProps.isPlay)
    }
  }

  setRef = el => {
    this.video = el
  }
  
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props

    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }
}

export default Video
