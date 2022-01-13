const PORT = 3000;

const express = require('express');

const bodyParser = require('body-parser');



let posts = [

    { id: "jsjdjs", title: "teste", description: "Descricao" }

]

const app = express();


app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts))

});



app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    post.push({ id, title, description });

    res.send("Post adicionado");

})




app.listen(PORT, () => {

    console.log("Server running on", PORT)


})

function generateID() {

    return Math.random().toString(36).substring(2, 9);

}