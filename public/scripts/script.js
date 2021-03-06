document.addEventListener('DOMContentLoaded', () => {

    updatePosts();


})

function updatePosts() {


    fetch("http://localhost:3000/api/all").then(res => {

        return res.json();

    }).then(json => {



        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post) => {

            let postElement = `  <div id=${post.id}>

       

<div>

    <h5 style="margin-top:10px; font-size:20px;">${post.title}</h5>

</div>

<div style="margin-top:10px;">${post.description}</div>



</div>
`

            postElements += postElement;

        })

        document.getElementById("posts").innerHTML = postElements;

    })



}

function newPost() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description }

    const options = {
        method: "POST", headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {

        console.log(res)

        updatePosts();
        let title = document.getElementById("").value;
        let description = document.getElementById("").value;

    })

}