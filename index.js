const express = require('express');

PORT = 3000;

const bodeParser = require('body-parser');
const bodyParser = require('body-parser');
const req = require('express/lib/request');

const app = express();

let posts = [

    {
        id: "skasmdskas",
        title: "kmskmas",
        description: "nskasnas"
    },


]


app.get('/all', (req, res) => {

    res.json(JSON.stringify(posts))

});


app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateID()
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description });

    res.send('Posts adicionados')

})

app.listen(PORT, () => {

    console.log('Server running on', PORT);

})

function generateID() {

    return Math.random().toString(36).substring(2, 9);

}