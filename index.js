fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    const dataSubset = data.slice(0, 5);
    let postedData = "";
    dataSubset.forEach((postMessage) => {
      postedData += `
            <h3>${postMessage.title}</h3> 
            <p>${postMessage.body}</p>
            
             `;
    });
    document.getElementById("api-container").innerHTML = postedData;
  });

document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const postTitle = document.getElementById("post-title").value;
    const postText = document.getElementById("textarea-container").value;

    const fullPost = {
      title: postTitle,
      text: postText,
    };

    console.log(fullPost);
  });
