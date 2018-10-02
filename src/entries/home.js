import React from 'react'
import ReactDOM from 'react-dom'

import Home from '../pages/Home'

import data from '../api.json'

ReactDOM.render(
  <Home data={data} />,
  document.getElementById('home')
)
