import React from 'react'

import './style.css'

const Search = props => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      className="Search-input"
      ref={props.setRef}
      placeholder="¿Qué buscas?"
      onChange={props.handleChange}
      value={props.value}
      type="text"
    />
  </form>
)

export default Search
