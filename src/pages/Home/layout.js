import React from 'react'

import './layout.css'

function HomeLayout(props) {
  return(
    <section className="Home">
      {props.children}
    </section>
  )
}

export default HomeLayout
