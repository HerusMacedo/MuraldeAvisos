const express = require('express');

const PORT = 3000;

const path = require('path')

const app = express();

const apiRoute = require("./routes/api");

app.use('/api', apiRoute);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {

    console.log('Server running on', PORT);

})

