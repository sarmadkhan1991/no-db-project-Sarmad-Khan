import React from 'react';

export default function SongForm (props) {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.postSong();
        }}>
            <div>
                Song Name: <input name='songName' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.songName}/>
            </div>
            <div>
                Album Name: <input name='albumName' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.albumName}/>
            </div>
            <div>
                Lyrics: <input name='lyrics' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.lyrics}/>
            </div>
            <div>
                Composition: <input name='composition' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.composition}/>
            </div>
            <div>
                PreProduction: <input name='preProduction' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.preProduction}/>
            </div>
            <div>
                PostProduction: <input name='postProduction' 
                                  onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                  value={props.postProduction}/>
            </div>
            <div>
                Deadline: <input name='deadline' 
                                 type='date'
                                 onChange={event => props.changeHandler(event.target.name, event.target.value)}
                                 value={props.deadline}/>
            </div>
            <button>Add Song</button>
        </form>
    )
}