import React, {Component} from 'react'

import './layout.css'

class RegularError extends Component {
  state = {
    error: false
  }

  componentDidCatch(err, info) {
    this.setState({
      error: true
    })
  }

  render() {
    if(this.state.error) {
      return(
        <section className="RegularError">
          <h2>🤒 ¡Upps!</h2>
          <h1>🗺</h1>
          <p>Ocurrio un error 👽</p>
        </section>
      )
    }

    return this.props.children
  }
}

export default RegularError
