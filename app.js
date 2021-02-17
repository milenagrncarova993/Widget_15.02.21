function fetchData(){
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
  })
  .then(data => {
    pictures = data;
    const html = iterator(data,0);
    document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
    var elements = document.getElementsByClassName("container");
    for(var i=index; i<elements.length; i++) {
      index = i;
      elements[i].addEventListener("click",(card)=> {
        document.querySelector("#pop").insertAdjacentHTML("afterbegin", showPopup(data[card.target.id]));
        });
   }

  })
  .catch(error => {
    console.log(error)
  })
}


function showPopup(user){
  return`
  <div onClick="destroy()" class="popup">
  <div class="popup-content">
    <img class="popup-image"src="${user.image}" alt="image"/>
    <div class="popup-desc">
      <div class= "top-part">
        <img class="avatar"src="${user.profile_image}" alt="profile-image"/>
        <div class ="top-part-content">
          <p><strong>${user.name}</strong><p>
          <p>${user.date}</p>
        </div>
        <img src="icons/instagram-logo.svg" alt="instagram-logo"/>
      </div>
      <hr>
      <div class="middle-part">
        <p>#${user.caption}</p>
      </div>
      <div class="bottom-part">
        <img src="icons/heart.svg" alt="heart-logo"/>
        ${user.likes}
      </div>
    </div>
  </div>
</div>
  `
}

function userTemplate(user,i){
  return`
    <a href="" id="${i}"class="container">
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
    </a>
    
    `
}


fetchData();
