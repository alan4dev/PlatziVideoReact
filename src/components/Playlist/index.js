import React from 'react'

import Song from '../../containers/Song'

import './style.css'

function Playlist(props) {
  return (
    <div className="Playlist" key={props.playlist.id}>
      {
        props.playlist.map(id => {
          return <Song handleOpenModal={props.handleOpenModal} id={id} key={id} />
        })
      }
    </div>
  )
}

export default Playlist
