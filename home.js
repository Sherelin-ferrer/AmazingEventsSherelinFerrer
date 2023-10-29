const events = data.events
const contenedorCheck = document.getElementById("contenedorcheck")
const contenedor = document.getElementById("contenedorcards")
const contenedorsearch = document.getElementById("contenedorsearch")


let categorias = []

categorias = Array.from(new Set(events.map(cartas => cartas.category)))


function mostrarchecks(arraycategory) {
    arraycategory.forEach(category => {
        let checkbox = document.createElement("div")
        checkbox.classList.add("form-check", "form-switch")
        checkbox.innerHTML = `
    
                <input class="valores form-check-input" type="checkbox" value="${category.replace("-"," ")}" id=${category}>
                <label class="form-check-label" for=${category}>${category.replace("-"," ")}</label>
            
    `

        contenedorCheck.appendChild(checkbox)
    })
}
mostrarchecks(categorias)

console.log(categorias)



function filtrarCategory (arrayEventosFiltrados){

    let checked = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`)).map(checkbox => checkbox.value)

    let categoriasFiltradas = []
    arrayEventosFiltrados.forEach(events =>{
        checked.forEach(categorias =>{
            if( categorias == events.category.replace(" ","-")){
                categoriasFiltradas.push(events) 
            }
        })
    })
    if (categoriasFiltradas.length == 0){
        categoriasFiltradas = arrayEventosFiltrados
    }
    console-log(arrayEventosFiltrados)
    console.log(categoriasFiltradas)
    return categoriasFiltradas
} 





function filtrarTexto(arrayEventosFiltrados){
   return arrayEventosFiltrados.filter(eventos => events.name.tolowercase().includes(contenedorsearch.value.tolowercase()))
}console.log(filtrarTexto)


function crearCard (arrayEventosFiltrados){
    if(arrayEventosFiltrados.length==0){
        contenedor.innerHTML = `<h1>No se encontró su busqueda</h1>`
    }else{
    contenedor.innerHTML = ""
    arrayEventosFiltrados.forEach(cartas =>{

    

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
    <a href="./details.html?id=${cartas._id}" class="btn btn-outline-success">Details</a>

</div>
`

    contenedor.appendChild(card)
  
}
)}

}  crearCard(events)








function superFiltro(arrayEventosFiltrados){
    let filtro1 = filtrarCategory(arrayEventosFiltrados)
    let filtro2 = filtrarTexto(filtro1)
    crearCard(filtro2)
}

contenedorCheck.addEventListener("change",()=>{
     superFiltro (events)
   
})

contenedorsearch.addEventListener("keyup", ()=>{
    superFiltro(events)
  

})