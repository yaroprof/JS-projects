const contentContainer = document.getElementById('content-container');
const updateButton = document.getElementById('update-btn');
let posts = [];
const updateContent = () => {
  //   // Send a request to the JSONPlaceholder API to retrieve all posts
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      // Get a random post from the array
      const randomPost = data[Math.floor(Math.random() * data.length)];
      const title = randomPost.title;
      const body = randomPost.body;
      // Add the new post to the array of posts

      const post = { title: title, body: body };
      posts.push(post);
      // Create a new HTML element to display the content

      const newContent = document.createElement('div');
      newContent.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
    `;
      // Add the new content to the page

      contentContainer.appendChild(newContent);
    })
    .catch((error) => console.error(error));
};

updateButton.addEventListener('click', updateContent);
