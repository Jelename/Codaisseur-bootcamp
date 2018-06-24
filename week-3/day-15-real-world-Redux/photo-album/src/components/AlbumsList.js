import * as React from 'react'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>
    There are { props.albums.length } albums available.
    <ul>
      {props.albums.map(album => <li key={album.id}>{album.title}</li>)}
    </ul>
  </div>)
}

//we are using this component(function) to only display information (dumb component)
//it doesnt contain any logic


//we don't have this.props because is a functional component
