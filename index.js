const express = require('express');

PORT = 3000;

const bodeParser = require('body-parser');
const bodyParser = require('body-parser');
const req = require('express/lib/request');

const Posts = require('./model/posts');
const posts = require('./model/posts');

const app = express();



app.get('/all', (req, res) => {

    res.json(JSON.stringify(posts.getAll()))

});


app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateID()
    let title = req.body.title;
    let description = req.body.description;

   posts.newPost(title,description)

    res.send('Posts adicionados')

})

app.listen(PORT, () => {

    console.log('Server running on', PORT);

})

