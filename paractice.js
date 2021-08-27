// function loadComment() {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(res => res.json())
//         .then(data => getComment(data));
// }
// loadComment();

// function getComment(comments) {
//     const sectionContainer = document.getElementById('comment-container');
//     for (const comment of comments) {
//         const div = document.createElement('div');
//         div.classList.add('comment');
//         div.innerHTML = `
//         <h1>${comment.id}</h1>
//         <h2> ${comment.name}</h2>
//         <p> ${comment.body}</p>
//         `;
//         sectionContainer.appendChild(div);
//     }
// }

document.getElementById('showPhotos').addEventListener('click',function() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(images => getImages(images))
})

function getImages(images) {
    const imageContianer = document.getElementById('comment-container');
    for(const image of images) {
        const img = document.createElement('img');
        img.classList.add('photo')
        img.src = `<img>${image.url} </img>`;
        imageContianer.appendChild(img);
    }
}