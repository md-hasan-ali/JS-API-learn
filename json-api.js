function createApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => getUser(data));
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => getPost(data));
}

function getUser(data) {
    const ul = document.getElementById('user-data');
   for(const user of data) {
       const li = document.createElement('li');
       li.innerText =  `Name : ${user.name} , Email : ${user.email}`;
       ul.appendChild(li);
   }
}

function getPost(data) {
    const ul = document.getElementById('post-id');
    for(const post of data) {
        const li = document.createElement('li');
        li.innerText = `Id : ${post.id}`
        ul.appendChild(li);
    }
}

