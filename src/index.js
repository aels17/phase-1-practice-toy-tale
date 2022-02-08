let addToy = false;

fetchAll()

function fetchAll(){
  fetch("http://localhost:3000/toys")
  .then (res => res.json())
  .then(objArray => {
    objArray.forEach(obj => { 
      objFunc(obj)
    })
  })
}

const toyContainer = document.getElementById("toy-collection");

function objFunc(obj){
  const card = document.createElement("div");
  card.className = "poke-card";
  
  const displayImg = document.createElement("img");
  displayImg.src = obj.image;
  const ptag = document.createElement("p")
  ptag.textContent = "Likes: " + obj.likes;

  const btn = document.createElement("button");
  btn.className = "like-btn"
  btn.id = obj.id


  card.append(displayImg, ptag, btn)

  toyContainer.appendChild(card);

  }

  const addBtn = document.querySelector("#new-toy-btn");

  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
 
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
