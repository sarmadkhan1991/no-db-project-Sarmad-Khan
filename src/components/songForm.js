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
                                   list='lyrics'
                                   placeholder={props.lyrics}
                                   onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='lyrics' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist>
            </div>
            <div>
                Composition: <input name='composition' 
                                   list='composition' 
                                   placeholder={props.composition}
                                   onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='composition' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist>
            </div>
            <div>
                PreProduction: <input name='preProduction' 
                                   list='preProduction' 
                                   placeholder={props.preProduction}
                                   onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='preProduction' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist>
            </div>
            <div>
                PostProduction: <input name='postProduction' 
                                   list='postProduction' 
                                   placeholder={props.postProduction}
                                   onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='postProduction' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist>
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