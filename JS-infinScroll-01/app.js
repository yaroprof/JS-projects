const container = document.getElementById('container');
const loading = document.querySelector('.loading');

getPost()
getPost()
getPost()

window.addEventListener("scroll", () =>{
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement
  if(scrollTop + clientHeight > scrollHeight - 5){
    showLoading()
  }
})

function showLoading() {
  loading.classList.add("show")
  setTimeout(getPost, 1000);
}

// -01
// // Get Elements: posts & users from API - async request

async function getPost() {
  const getPostResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
  const postData = await getPostResponse.json();

  const getUserResponse = await fetch(`https://randomuser.me/api`);
  const userData = await getUserResponse.json();

  const data = { post: postData, user: userData.results[0] };

  addDataToDOM(data)
}
// logic for data separate from API
function getRandomNr() {
  return Math.floor(Math.random() * 100) + 1;
}

// 02
// Create DOM with recieved data
function addDataToDOM(data) {
  const postElement = document.createElement('div')
  postElement.classList.add("blog-post")
  postElement.innerHTML = `
    <h2 class="title">${data.post.title}</h2>
    <p class="text">${data.post.body}</p>
    
    <div class="user-info">
    <img src="${data.user.picture.large}" alt="${data.user.name.first}" />
      <span>${data.user.name.first} ${data.user.name.last}</span>
    </div>
  `
  container.appendChild(postElement)
  loading.classList.remove("show")
}

// Here is an algorithmic representation of the lazy loading code:
// Get the DOM elements for the container and loading indicator.
// Load initial data by calling the getPost() function three times.
// Add a scroll event listener to the window object.
// In the scroll event listener, get the scroll top position, scroll height, and client height of the document element.
// If the client height plus the scroll top position is greater than or equal to the scroll height minus 5 pixels, show the loading indicator and call the getPost() function after a one-second delay.
// In the getPost() function, use the fetch() method to make asynchronous requests to two different endpoints: one for a random blog post and another for random user data.
// Wait for the responses to be returned, and then extract the necessary data from the response objects.
// Combine the post and user data into an object and pass it to the addDataToDOM() function.
// In the addDataToDOM() function, create a new div element and set its class to blog-post.
// Add the post title, body, and user information to the div element using the received data.
// Append the div element to the container.
// Remove the show class from the loading indicator to hide it.
// The getRandomNr() function generates a random number between 1 and 100 to be used as the post ID in the fetch() request.
// This algorithm represents the flow of the code and helps to understand the logic behind it.
