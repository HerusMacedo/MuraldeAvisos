

document.addEventListener('DOMContentLoaded', ()=>{

updatePosts();

})

function updatePosts() {


fetch("http://localhost:3000/api/all").then(res=>{

return res.json();

}).then(json =>{



let postElements = '';

let posts = JSON.parse(json);
posts.forEach((post)=>{

let postElement = `  <div id=${post.id}>

<div>

    <h5>${post.title}</h5>

</div>

<div>${post.description}</div>

</div>
`

postElements += postElement;

})

document.getElementById("posts").innerHTML = postElements;

})



}