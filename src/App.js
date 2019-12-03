import React from 'react';
import './App.css';
import axios from 'axios';
import Album from './components/Album/Album';
import SongForm from './components/songForm';

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      songs: [{songName: "placeholder"}],
      albumName: '',
      songName: '',
      lyrics: '',
      composition: '',
      preProduction: '',
      postProduction: '',
      deadline: ''
    }
    this.getAllSongs = this.getAllSongs.bind(this);
    this.postSong = this.postSong.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.deleteSong = this.deleteSong.bind(this); 
    this.editSong = this.editSong.bind(this);
  }

  componentDidMount() {
    this.getAllSongs();
  }


  getAllSongs(){
    axios.get('/api/album/songs').then(res => {
      this.setState( {  
        songs: res.data
      } )
    })
  }

  editSong(id) {
    const { songName, albumName, lyrics, composition, preProduction, postProduction, deadline } = this.state
    axios.put(`/api/album/song/${id}`, { songName, albumName, lyrics, composition, preProduction, postProduction, deadline })
    .then(res => {
      this.setState( { 
        songs: res.data
       } )
    })
  }


  postSong () {
    const { albumName, songName, lyrics, composition, preProduction, postProduction, deadline } = this.state;
    axios.post('/api/album/song', { albumName, songName, lyrics, composition, preProduction, postProduction, deadline })
    .then(res => {
      this.setState ( { 
        songs: res.data,
        albumName: '',
        songName: '',
        lyrics: '',
        composition: '',
        preProduction: '',
        postProduction: '',
        deadline: ''
       } )
    })
  }

  deleteSong(id){
    axios.delete(`/api/album/deletesong/${id}`).then(res => {
      this.setState( { 
        songs: res.data
       } )
    })
  }

  changeHandler (key, value) {
    this.setState( { 
      [key]: value
     } )
  }

  render () {
    console.log(this.state);
    const { songs, albumName, songName, lyrics, composition, preProduction, postProduction, deadline } = this.state;
    return (
      <div className="App">
        <header className="App-header">
            <h1>Album Progress Tracker</h1>
          </header> 
          <Album songs={songs} 
                 songName={songName}
                 album={albumName}
                 lyrics={lyrics}
                 composition={composition}
                 preProduction={preProduction}
                 postProduction={postProduction}
                 deadline={deadline}
                 deleteSong={this.deleteSong}
                 changeHandler={this.changeHandler}
                 editSong={this.editSong}/>
          <SongForm songName={songName}
                    album={albumName}
                    lyrics={lyrics}
                    composition={composition}
                    preProduction={preProduction}
                    postProduction={postProduction}
                    deadline={deadline}
                    changeHandler={this.changeHandler}
                    postSong={this.postSong}/>
      </div>
    );
  }
}

export default App;