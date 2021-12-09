
let nombreApellido = document.getElementById("nombreApellido");
let email = document.getElementById("email");
const inputEmail = document.getElementById("email")
let formularioCompra = document.getElementById("formulario");
formularioCompra.addEventListener("submit", validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    localStorage.setItem("formulario", nombreApellido.value + ", " + inputEmail.value)
    nombreApellido.value = "";
    inputEmail.value = "";
}

let pack3g = 350;
let pack5g = 650;
let pack10g = 1250;
let precios = [150,150,300,450,0,300,300,450,450,150,150,300,450,450,300,300,150,600,150,750,300,300];
const provincias = ["buenos aires", "catamarca", "chaco", "chubut", "cordoba", "corrientes", "formosa", "jujuy", "la pampa", "la rioja", "mendoza", "misiones", "neuquen", "rio negro", "salta", "san juan", "san luis", "santa cruz", "santa fe", "santiago del estero", "tierra del fuego", "tucuman"];
localStorage.setItem("ArrayDeProincias", JSON.stringify(provincias));

const localidadesDom = document.getElementById("provincias")
for (let i = 0; i < provincias.length; i++) {
    let option = document.createElement("option")
    option.innerHTML = provincias[i]
    option.value = precios[i]
    localidadesDom.appendChild(option)
}

let select = document.getElementById("provincias")
select.addEventListener('change',function(){
    localStorage.setItem("costoEnvio", select.value)
});

localidadesDom.addEventListener("change", function (e) {
    let total = document.getElementById("total")
    total.innerHTML = "Total: $" + (Number(e.target.value))
});


(function(){
    
    $(function(){

        $('#open-modal').on('click',function() {
            $('#modal').modal();
        })

    });
    

}());
    let enviarBoton = document.getElementById("open-modal");
    console.log(nombreApellido);

function habilitar(){
    if(nombreApellido.value !== '' && email.value !== '') {
        enviarBoton.disabled = false; 
    } else {
        enviarBoton.disabled = true;
    }
    

} 

// val = 0;
// if (nombreApellido.value === ''){
//     val++;
// }
// if (email.value === ''){
//     val++;
// }
// if (val === 0) {
//     enviarBoton.disabled = false;
// } else {
//     enviarBoton.disabled = true;
// }
// console.log(nombreApellido.value);

nombreApellido.addEventListener("blur", habilitar);
email.addEventListener("blur", habilitar);
document.getElementById("open-modal").addEventListener("click", () => {});



// const nombre = "Franco";
// localStorage.setItem("NombreApellido", nombre)

// const localnombre = localStorage.getItem("NombreApellido")
// console.log(localnombre);


