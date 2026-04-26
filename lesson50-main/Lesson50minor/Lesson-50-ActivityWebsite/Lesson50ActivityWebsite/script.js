
let data,songs;
function init(){
  $.ajaxSetup({async: false});
  link = "https://improved-enigma-6959r4rpr6vvhrp4x-8500.app.github.dev/" //On windows, running the server on your local machine puts it here. change this in github
  route="/songs"
  bld = ""
  fetch(link + route).then(response => response.json()).then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      bld += `<div class="card"><h1>${data[i].Name}</h1></div>`
    }
    document.getElementById("output").innerHTML = bld;
  })
 
}




