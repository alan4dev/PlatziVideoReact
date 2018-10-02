import React from 'react'

import Song from '../Song'

import './style.css'

function Playlist(props) {
  return (
    <div className="Playlist" key={props.playlist.id}>
      {
        props.playlist.map(item => {
          return <Song openModal={props.handleOpenModal} {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist
