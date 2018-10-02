import React, {Component} from 'react'

import SearchLayout from '../../components/Search'

class Search extends Component {
  state = {
    value: 'Alan Santiago'
  }

  handleSubmit = ev => {
    ev.preventDefault()
  }

  handleInputRef = el => {
    this.input = el
  }

  handleInputChange = ev => {
    this.setState({
      value: ev.target.value.toLowerCase()
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

export default Search
