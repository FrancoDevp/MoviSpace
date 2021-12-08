
const inputNombre = document.getElementById("nombre")
const inputEmail = document.getElementById("email")
let formularioCompra = document.getElementById("formulario");
formularioCompra.addEventListener("submit", validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    localStorage.setItem("formulario", inputNombre.value + ", " + inputEmail.value)
    inputNombre.value = "";
    inputEmail.value = "";
}

let precios = [150,150,300,450,0,300,300,450,450,150,150,300,450,450,300,300,150,600,150,750,300,300];
const provincias = ["buenos aires", "catamarca", "chaco", "chubut", "cordoba", "corrientes", "formosa", "jujuy", "la pampa", "la rioja", "mendoza", "misiones", "neuquen", "rio negro", "salta", "san juan", "san luis", "santa cruz", "santa fe", "santiago del estero", "tierra del fuego", "tucuman"];
localStorage.setItem("ArrayDeProincias", provincias)

const localidadesDom = document.getElementById("provincias")
for (let i = 0; i < provincias.length; i++) {
    let option = document.createElement("option")
    option.innerHTML = provincias[i]
    option.value = precios[i]
    localidadesDom.appendChild(option)
    localStorage.setItem("optionProvincias", option.innerHTML + option.value)
}

localidadesDom.addEventListener("change", function (e) {
    let total = document.getElementById("total")
    total.innerHTML = "Total: $" + (Number(e.target.value) + Number(350))
});




// const nombre = "Franco";
// localStorage.setItem("NombreApellido", nombre)

// const localnombre = localStorage.getItem("NombreApellido")
// console.log(localnombre);


