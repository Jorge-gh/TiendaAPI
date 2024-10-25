const productosContenedor = document.getElementById("productos");
const containerRopa = document.getElementById("containerRopa");
const containerTech = document.getElementById("containerTech");
const tituloModal = document.getElementById("tituloModal");
const imgModal = document.getElementById("imgModal");
const descriptionModal = document.getElementById("descriptionModal");
const precioModal = document.getElementById("precioModal");

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

function crearTarjeta({id,title, description,image,price,category,rating}) {
    const tarjeta = document.createElement("div");
    tarjeta.classList = "producto"
    productosContenedor.appendChild(tarjeta);
    
    tarjeta.addEventListener('click', function() {
        modal.classList.add("mostrar")
        tituloModal.innerText = title
        imgModal.src = image
        descriptionModal.innerText = description
        precioModal.innerText = "$" + price + " | " + category
    })

    const info = document.createElement("div")
    tarjeta.appendChild(info)

    const titulo = document.createElement("h1")

    let titleOffset = ""
    if (String(title).length > 16) titleOffset = "..."
    titulo.innerText = String(title).slice(0, 16) + titleOffset;
    info.appendChild(titulo)

    const imagen = document.createElement("img")
    imagen.src = image
    tarjeta.appendChild(imagen)

}

async function conseguirInformacion() {
    const respuesta = await fetch("https://fakestoreapi.com/products")
    const informacion = await respuesta.json()

    informacion.forEach(producto => {
        crearTarjeta(producto)
    })
}

conseguirInformacion()

span.onclick = function () {
    modal.classList.remove("mostrar")
}