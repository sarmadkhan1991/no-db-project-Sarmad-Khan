const album = require("../data.json");
let id = 3;



module.exports = {
    getAllSongs: (req, res, next) => {
        res.status(200).send(album)
    },
    getSongById: (req, res, next) => {
        const { id } = req.params;
        const index = album.findIndex((song) => {
            return song.id === +id;
        });
        if (index !== -1) {
            res.status(200).send(album[index]);
        } else {
            res.status(404).send('Song not found!');
        }
    },
    postSong: (req, res, next) => {
        const {
            albumName,
            songName,
            lyrics,
            composition,
            preProduction,
            postProduction,
            deadline
        } = req.body;
        console.log(req.body);
        const song = {
            id, 
            albumName,
            songName,
            lyrics,
            composition,
            preProduction,
            postProduction,
            deadline
        }
        album.push(song);
        id++;

        res.status(200).send(album);
    },
    updateSong: (req, res, next) => {
        const { id } = req.params
        const { songName, albumName, lyrics, composition, preProduction, postProduction, deadline } = req.body;
        const index = album.findIndex(song => {
            return song.id === +id;
        });

        if (index !== -1) {
            album[index].songName = songName || album[index].songName;
            album[index].lyrics = lyrics || album[index].lyrics;
            album[index].composition = composition || album[index].composition;
            album[index].preProduction = preProduction || album[index].preProduction;
            album[index].postProduction = postProduction || album[index].postProduction;
            album[index].albumName = albumName || album[index].albumName;
            album[index].deadline = deadline || album[index].deadline;

            res.status(200).send(album)
        } else {
            res.status(404).send('Song not found!')
        }
    },
    removeSong: (req, res, next) => {
        const { id } = req.params;
        const index = album.findIndex(song => {
            return song.id === +id;
        });
        if (index !== -1) {
            album.splice(index, 1);
            res.status(200).send(album);
        } else {
            res.status(404).send('Song not found!');
        }
    }
}