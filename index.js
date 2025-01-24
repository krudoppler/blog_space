

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const dataSubset = data.slice(0, 5)
        let postedData = ""
        dataSubset.forEach(postMessage => {
            postedData += `
            <h3>${postMessage.title}</h3> 
            <p>${postMessage.body}</p>
            
             `
        });
        document.getElementById("api-container").innerHTML = postedData
        }
    )