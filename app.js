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
var index = 0;
var pictures = null;

function iterator(data, idx) {
  result =[];
  for (var i =idx; i < idx+4 ; i++)
  {
    result.push(userTemplate(data[i],i));
  }
  return result.join(""); 
}

function destroy(){
  var elements = document.getElementsByClassName("popup");
  for (var i=0; i<elements.length; i++)
  {
    elements[i].style.display="none";
  }
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
    <div id="${i}"class="container">
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
    </div>
    
    `
}

fetchData();

function loadmore(){
  var next= iterator(pictures,index+1);
  document.querySelector("#app").insertAdjacentHTML("beforeend",next);
  var elements = document.getElementsByClassName("container");
  for(var i=index; i<elements.length; i++) {
      index = i;
      if (i >= elements.length){
        elements[i].style.display="none";
      }
    elements[i].addEventListener("click",(card)=> {
      card.stopPropagation();
      document.querySelector("#pop").insertAdjacentHTML("afterbegin", showPopup(pictures[card.target.id]));
    });
  }
}
