import React, {Component} from 'react'
import {connect} from 'react-redux'

import SongLayout from '../../components/Song'

class Song extends Component {
  render() {
    return <SongLayout {...this.props.data.toJS()} handleOpenModal={this.props.handleOpenModal} />
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'song', props.id])
  }
}

export default connect(mapStateToProps)(Song)
