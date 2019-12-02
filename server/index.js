const express = require('express');
const app = express();
const ac = require('./controller/albumController');
app.use(express.json());

app.get('/api/album/songs', ac.getAllSongs);

app.get('/api/album/song/:id', ac.getSongById);

app.post('/api/album/song', ac.postSong);

app.put('/api/album/song/:id', ac.updateSong);

app.delete('/api/album/deletesong/:id', ac.removeSong);


const port = 4001;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});