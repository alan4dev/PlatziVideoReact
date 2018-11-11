import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import './style.css'

class Song extends PureComponent {
  handleClick = ev => {
    this.props.handleOpenModal(this.props.id)
  }

  render() {
    return(
      <div className="Song" onClick={this.handleClick}>
        <img className="Song-cover" src={`./res/covers/${this.props.cover}`} alt=""/>
        <h3 className="Song-title">{this.props.title}</h3>
        <p className="Song-author">{this.props.author}</p>
      </div>
    )
  }
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired
}

export default Song
