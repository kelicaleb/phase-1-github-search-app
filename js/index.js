const form = document.querySelector("#github-form");
form.addEventListener("submit", e=>{
    e.preventDefault();
    let search = e.target.search.value;
    fetch(`https://api.github.com/search/users?q=${search}`,{
        method:"GET",
        header:{
            "Content-Type": "application/vnd.github.v3+json"
        }
    })
    .then(res => res.json())
    .then((data) =>{
        let div = document.createElement("div");
        let p = document.createElement("p");
        div.innerHTML = `
        <ul>
        <li>Username: ${JSON.stringify(data.items[0].login)}</li>
        <li><img src=${JSON.stringify(data.items[0].avatar_url)}/></li>
        <li>Link: ${JSON.stringify(data.items[0].html_url)}</li>
        </ul>
        `
        document.body.append(div)
    })
    .catch(error => 
        alert(error.message))
});
