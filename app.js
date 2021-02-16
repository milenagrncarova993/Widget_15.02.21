function fetchData(){
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
  })
  .then(data => {
    const html = data
    .map(userTemplate).join("");
    document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
  })
  .catch(error => {
    console.log(error)
  });
}

function userTemplate(user){
  return`
    <div class="cards">
      <img src="${user.profile_image}" alt="profile-image"/>
      ${user.name}
      ${user.date}
      <img src="icons/instagram-logo.svg" alt="instagram-logo"/>
      ${user.image}
      ${user.caption}
      <hr>
      <img src="icons/heart.svg" alt="heart-logo"/>
      ${user.likes}
    </div>`
}

fetchData();