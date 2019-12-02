# no db review (Music Project (Album) Checklist)


## front-end checklist

- reset.css ===> eric meyers 2.0 reset
- package.json
    - main: server/index.js
- setupProxy.js => 4000

### front-end file structures

- src/
    - App.js => 
    - index.js
    - App.css
    - index.css => paste reset here
    - setupProxy.js
    - components/ 
        - Album.js
        - Song.js
        - Buttons.js
        - SongForm.js

### dependencies

- axios 
- http-proxy-middleware
- react-icons

## backend checklist

### backend file-structures

- server/
    - index.js
    - controller/
        - SongController.js

### dependencies

- express

### API routes

- get: `/api/album/songs`
- getById: `/api/album/song/:id`
- post: `/api/album/song`
- put: `/api/album/song/:id` {body: name, lyrics, composition, preProduction, postProduction, status}

```js
app.put(`/api/album/song/:id`, (req, res, next) => {
    const { name, lyrics, composition, preProduction, postProduction, status } = req.body;
})
```

- delete: `/api/album/deleteSong/:id`

### data

```js
const album = [
    {
        id: Number,
        name: String,
        lyrics: String,
        preProduction: String,
        composition: String,
        postProduction: String,
        status: String,
        deadline: Date
    }
]

const song = {
    id: Number,
    name: String,
    lyrics: String,
    composition: String,
    preProduction: String,
    postProduction: String,
    status: String,
    deadline: Date
}
```
