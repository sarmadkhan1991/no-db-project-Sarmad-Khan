import React from 'react';
import './App.css';
import axios from 'axios';
import { IoIosMusicalNote } from 'react-icons/io'

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      album: []
    }
    this.getAllSongs = this.getAllSongs.bind(this);
  }

  componentDidMount() {
    this.getAllSongs();
  }


  getAllSongs(){
    axios.get('/api/album/songs').then(res => {
      this.setState( {  
        album: res.data
      } )
    })
  }

  render () {
    const { album } = this.state;
    const mappedSongs = album.map(song => {
      return (
        <div key={song.id}>
          <div>{song.name}</div>
          <div>{song.lyrics}</div>
          <div>{song.deadline}</div>
        </div>
      )
    })
    return (
      <div className="App">
          {IoIosMusicalNote}:{mappedSongs}
      </div>
    );
  }
}

export default App;
