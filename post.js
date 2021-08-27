function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => getPost(data));
}
loadPost();

function getPost(posts) {
    const postContainer = document.getElementById('post-container');
   for(const post of posts) {
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML = `
       <h1>${post.id}</h1>
       <h2>${post.title}</h2>
       <p>${post.body}</p>
       `;
       postContainer.appendChild(div);
   }
}

// function getPost(posts) {
//     const postContainer = document.getElementById('post-container');
//     for(const post of posts) {
//         const div = document.createElement('div');
//         div.classList.add('post')
//         div.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         postContainer.appendChild(div);
//     }
// }