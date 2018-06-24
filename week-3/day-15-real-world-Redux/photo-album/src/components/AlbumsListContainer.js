import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux' //connect is also an object
import { helloWorld } from '../actions/test' //named export
import { addAlbum, setAlbum, getAlbums } from '../actions/album'

const sleep = time => new Promise (
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

class AlbumsListContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
    .then(response => this.setState({ albums: response.body })) //nothing in a redux store right now

    sleep(2000)
      .then(message => this.props.addAlbum(1, message))

    sleep(3000)
      .then(message => this.props.addAlbum(2, message))

    //this.props.helloWorld('Alice', 'Seriously Alice')//we have to call function with this.props so it is going to be dispathed
    this.props.addAlbum('5', 'Enjoying sunshine')
    this.props.getAlbums()
  }

  render() {
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (store) => {
  return {
    albums: store.albums
  }
}

export default connect(mapStateToProps, { helloWorld, addAlbum, setAlbum, getAlbums })(AlbumsListContainer)//binging action creator
//If we bind action creators using connect, this.props.dispatch is no longer available.
