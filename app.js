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
      <div class= "top-part">
        <img class="avatar"src="${user.profile_image}" alt="profile-image"/>
        <div class ="top-part-content">
          <p><strong>${user.name}</strong><p>
          <p>${user.date}</p>
        </div>
        <img src="icons/instagram-logo.svg" alt="instagram-logo"/>
      </div>
      <div class="middle-part">
        <img class="image"src="${user.image}" alt="image"/>
        <p>#${user.caption}</p>
      </div>
      <hr>
      <div class="bottom-part">
        <img src="icons/heart.svg" alt="heart-logo"/>
        ${user.likes}
      </div>
    </div>`
}

fetchData();