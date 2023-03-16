const contentContainer = document.getElementById('content-container');
const updateButton = document.getElementById('update-btn');
let posts = [];
const updateContent = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      const randomPost = data[Math.floor(Math.random() * data.length)];
      const title = randomPost.title;
      const body = randomPost.body;

      const post = { title: title, body: body };
      posts.push(post);

      const newContent = document.createElement('div');
      newContent.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
    `;
      contentContainer.appendChild(newContent);
    })
    .catch((error) => console.error(error));
};

updateButton.addEventListener('click', updateContent);


