function fetchData(){
  fetch("data.json")
    .then(response => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
  })
  .then(data => {
    console.log(data);
    const html = data
      .map(user => {
        return`
        <div class="user">
        <p><img src="${user.image}" alt="${user.name}"/></p>
        <p>${user.caption}</p>
        </div>`;
      })
      .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
  })
  .catch(error => {
    console.log(error)
  });
}

fetchData();