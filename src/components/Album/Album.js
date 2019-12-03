import React from 'react';
import './album.css';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { IoIosMusicalNotes, IoIosSave } from 'react-icons/io';

class Album extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            edit: false
        }
        this.renderTable = this.renderTable.bind(this)
        this.renderTableHeader = this.renderTableHeader.bind(this)
    }

    renderTable () {
        const { edit } = this.state;
        if (edit) {
            return this.props.songs.map((song) => {
                const { id, albumName, songName, lyrics, composition, preProduction, postProduction, deadline } = song;
                return (
                    <tr key={id}>
                        <td><IoIosMusicalNotes/></td>
                        <td><input type='text'
                                   name='albumName'
                                   placeholder={albumName}
                                   value={this.props.albumName}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/></td>
                        <td><div className='status'></div></td>
                        <td><input type='text'
                                   name='songName'
                                   placeholder={songName}
                                   value={this.props.songName}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/></td>
                        <td><div className='status'></div></td>
                        <td><input name='lyrics' 
                                   list='lyrics'
                                   placeholder={lyrics}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='lyrics' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist></td>
                        <td><div className='status'></div></td>
                        <td><input name='composition' 
                                   list='composition' 
                                   placeholder={composition}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='composition' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist></td>
                        <td><div className='status'></div></td>
                        <td><input name='preProduction' 
                                   list='preProduction' 
                                   placeholder={preProduction}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='preProduction' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist></td>
                        <td><div className='status'></div></td>
                        <td><input name='postProduction' 
                                   list='postProduction' 
                                   placeholder={postProduction}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/>
                                    <datalist id='postProduction' >
                                        <option value='Not Started' />
                                        <option value='In Progress' />
                                        <option value='Completed' />
                                    </datalist></td>
                        <td><input type='date'
                                   name='deadline'
                                   placeholder={deadline}
                                   value={this.props.albumName}
                                   onChange={(event) => this.props.changeHandler(event.target.name, event.target.value)}/></td>
                        <td>
                            <button onClick={() => {
                                                    this.props.editSong(id)
                                                    this.setState({edit: false})}}><IoIosSave/></button>
                        </td>
                    </tr>
                )
            }
        ) 
        }else {
            return this.props.songs.map((song) => {
                const { id, albumName, songName, lyrics, composition, preProduction, postProduction, deadline } = song;
                console.log(lyrics)
                return (
                    <tr key={id}>
                        <td><IoIosMusicalNotes/></td>
                        <td>{albumName}</td>
                        <td><div className={lyrics === 'Completed' && composition === 'Completed' && preProduction === 'Completed' && postProduction === 'Completed' ? 'green': 'yellow'}></div></td>
                        <td>{songName}</td>
                        <td><div className={lyrics === "Completed" ? "green" : lyrics === "In Progress" ? "yellow" : "red"}></div></td>
                        <td>{lyrics}</td>
                        <td><div className={composition === "Completed" ? "green" : composition === "In Progress" ? "yellow" : "red"}></div></td>
                        <td>{composition}</td>
                        <td><div className={preProduction === "Completed" ? "green" : preProduction === "In Progress" ? "yellow" : "red"}></div></td>
                        <td>{preProduction}</td>
                        <td><div className={postProduction === "Completed" ? "green" : postProduction === "In Progress" ? "yellow" : "red"}></div></td>
                        <td>{postProduction}</td>
                        <td>{deadline}</td>
                        <td>
                            <button onClick={() => this.setState({edit: true})}><TiEdit/></button>
                            <button onClick={() => {this.props.deleteSong(id)}}><MdDelete/></button>
                        </td>
                    </tr>
                )
            }) 
        }

    }

    renderTableHeader () {
        return (
            <tr>
                <th></th>
                <th>Album Name</th>
                <th>Status</th>
                <th>Song Name</th>
                <th>Status</th>
                <th>Lyrics</th>
                <th>Status</th>
                <th>Composition</th>
                <th>Status</th>
                <th>PreProduction</th>
                <th>Status</th>
                <th>PostProduction</th>
                <th>Deadline</th>
                <th>Edit</th>

            </tr>
        )
    }

    render() {
        return (
        <div className="Main-container">
            <table id='table'> 
                <tbody>
                    {this.renderTableHeader()}
                    {this.renderTable()}
                </tbody>
            </table>
        </div>

        )
    }
}

export default Album