//GetPosts
function GetPosts(userID) {
  let request = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/posts?userId=" + userID;
  request.responseType = "json";
  request.open("get", url);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      document.getElementById("posts_content").innerHTML = "";
      for (post of posts) {
        console.log(post);
        document.getElementById("posts_content").innerHTML += `
        <div id="post">
            <h2> Titel: ${post.title}</h1>
            <hr>
            <p>Body: ${post.body}</p>
         </div>`;
      }
    } else {
      alert("404");
    }
  };
}
GetPosts(6);
//GetUsers
function GetUsers(UserId) {
  let request = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/users";
  request.responseType = "json";
  request.open("GET", url);
  request.send();
  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      document.getElementById("users_content").innerHTML = "";
      for (user of users) {
        document.getElementById("users_content").innerHTML += `
        <div id="user" onclick="userClick(${user.id})">
                <h3> Name: ${user.name}</h3>
                <hr>
                <h3>Email: ${user.email}</3>
                <h3>id: ${user.id}</3>
            </div>
            
        `;
      }
    }
  };
}
GetUsers();
function userClick(id) {
  GetPosts(id);
}
