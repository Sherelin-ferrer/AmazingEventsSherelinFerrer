
const contenedor = document.getElementById("contenedorcards")
const events = data.events

for(let cartas of events){
    if (cartas.date >= "2023-01-01") {
        
  
  


const card = document.createElement("div")
card.classList.add("card")

card.innerHTML = `

<img src="${cartas.image}" class="card-img-top h-50 " alt="...">
<div class="card-body gap-1 d-flex flex-column justify-content-center">
    <h5 class="card-title">${cartas.name} </h5>
    <p class="card-text">${cartas.description}</p>

</div>
<div class="d-flex justify-content-between m-3">
    <p> $ ${cartas.price}</p>
    <a href="./details.html" class="btn btn-outline-success">Details</a>

</div>
`

contenedor.appendChild(card)

}
}