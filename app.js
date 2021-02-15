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
  }).catch(error => {
    console.log(error)
  });
}

fetchData();