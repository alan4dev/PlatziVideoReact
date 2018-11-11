import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SearchLayout from '../../components/Search'

import * as actions from '../../actions'

class Search extends Component {
  state = {
    value: 'Alan Santiago'
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.actions.searchAsyncSong(this.input.value)
  }
  
  handleInputRef = el => {
    this.input = el
  }
  
  handleInputChange = ev => {
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return(
      <SearchLayout
        handleSubmit={this.handleSubmit}
        setRef={this.handleInputRef}
        value={this.state.value}
        handleChange={this.handleInputChange}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Search)
