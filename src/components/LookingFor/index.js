import React from 'react'

import Song from '../Song'

import './style.css'

const LookingFor = props => (
  <div className="LookingFor">
    <div className="LookingFor-playlist">
      {
        props.isLoading &&
        <h2>Loading...</h2>
      }
      {
        props.search.map(item => {
          return <Song handleOpenModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')} />
        })
      }
    </div>
  </div>
)

export default LookingFor
