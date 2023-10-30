const urlParams = new URLSearchParams (window.location.search)
const id = urlParams.get ("id")
console.log(id)
const events = data.events
let detallescards = events.find(events => events._id == id)
console.log(detallescards)
const contenedordetails = document.getElementById ("contenedordetails")

function crearCard(arrayeventos){
  


    const card = document.createElement("div")
    card.classList.add("card","row","no-gutters","cardes")
    card.style.width =""
    card.innerHTML = `
    
    <img src="${arrayeventos.image}" class="card-img img-fluid imgd  " alt="...">
    <div class="card-body gap-1 d-flex flex-column  contenido">
        <h5 class="card-title">${arrayeventos.name} </h5>
        <p class="card-text">${arrayeventos.description}</p>
        <p class="card-text"> Category: ${arrayeventos.category}</p>
        <p class="card-text"> Place: ${arrayeventos. place}</p>
        <p class="card-text"> Capacity: ${arrayeventos.capacity}</p>
        <p> $ ${arrayeventos.price}</p>
        
    </div>
    
    `
    
    contenedordetails.appendChild(card)
    
    }

    crearCard( detallescards)