import React from 'react'

import Category from '../Category'
import Search from '../../containers/Search'

import './style.css'

function Categories(props) {
  return(
    <div className="Categories">
      <Search />
      {
        props.categories.map(item => {
          return <Category handleOpenModal={props.handleOpenModal} key={item.id} {...item} />
        })
      }
    </div>
  )
}

export default Categories
