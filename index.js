let postsArray = [];

function renderPosts() {
  let postedData = "";
  postsArray.forEach((postMessage) => {
    postedData += `
            <h3>${postMessage.title}</h3> 
            <p>${postMessage.body}</p>
            <hr />
             `;
  });
  document.getElementById("api-container").innerHTML = postedData;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const postTitle = document.getElementById("post-title").value;
    const postText = document.getElementById("textarea-container").value;

    const fullPost = {
      title: postTitle,
      body: postText,
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
      method: "POST",
      body: JSON.stringify(fullPost),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((post) => {
        postsArray.unshift(post);
        renderPosts();

        document.getElementById("post-title").value = "";
        document.getElementById("textarea-container").value = "";
      });
  });
