import React from 'react'

import Category from '../Category'
import Search from '../../containers/Search'
import LookingFor from '../LookingFor'

import './style.css'

function Categories(props) {
  return(
    <div className="Categories">
      <Search />
      {
        props.search &&
        <LookingFor
          handleOpenModal={props.handleOpenModal}
          search={props.search}
          isLoading={props.isLoading}
        />
      }
      {
        props.categories.map(item => {
          return(
            <Category
              handleOpenModal={props.handleOpenModal}
              key={item.get('id')}
              {...item.toJS()}
            />
          ) 
        })
      }
    </div>
  )
}

export default Categories
