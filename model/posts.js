const express = require('express');
const app = express();

module.exports = {

    posts: [

        {
            id: "skasmdskas",
            title: "kmskmas",
            description: "nskasnas"
        },


    ],

    getAll() {

        return this.posts;

    },

    newPost(title, description) {

        this.posts.push({ id: generateID(), title, description });


    },

}


function generateID() {

    return Math.random().toString(36).substring(2, 9);

}