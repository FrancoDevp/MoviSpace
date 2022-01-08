(function () {
    $(function () {
        $('#open-modal').on('click', function () {
            $('#modal').modal();
        })
    });
}());

const tbody = document.querySelector(".tbody");
let carrito = []

const comprarCarrito = document.querySelectorAll("#comprar")
comprarCarrito.forEach(btn => {
    btn.addEventListener("click", agregarAlCarrito)
})

function agregarAlCarrito(e) {
    const button = e.target
    const item = button.closest(".card")
    const itemTitle = item.querySelector(".TitleModelo").textContent;
    const itemPrecio = item.querySelector(".precio").textContent;

    const nuevoItem = {
        title: itemTitle,
        precio: itemPrecio,
        cantidad: 1
    }
    agregarItemsAlCarrito(nuevoItem)
}

function agregarItemsAlCarrito(nuevoItem) {
    const alert = document.querySelector(".alert")
    setTimeout(function() {
        alert.classList.add("hide")
    }, 2000)
    alert.classList.remove("hide")
    const inputElemento = tbody.getElementsByClassName("inputElemento")
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].title.trim() === nuevoItem.title.trim()) {
            carrito[i].cantidad++;
            const inputValue = inputElemento[i]
            inputValue.value++;
            // total()
            return null;
        }
    }
    carrito.push(nuevoItem)
    renderCarrito()
}

function renderCarrito() {
    tbody.innerHTML = ""
    carrito.map(item => {
        const tr = document.createElement("tr")
        tr.classList.add("ItemCarrito")
        const Content = `
            <th scope="row">1</th>
            <td class="title">${item.title}</td>
            <td class="table_precio"><p>${item.precio}</p></td>
            <td class="table_cantidad">
            <input type="number" min="1" value=${item.cantidad} class="inputElemento">
            <button class="borrar btn btn-danger">X</button>
            </td>
        `
        tr.innerHTML = Content;
        tbody.append(tr)
        tr.querySelector(".borrar").addEventListener("click", borrarProducto)
        tr.querySelector(".inputElemento").addEventListener("change", sumaCantidad)
    })
    total()
}

function total() {
    let total = 0;
    let itemTotal = document.querySelector("#itemTotal")
    carrito.forEach((item) => {
        const precio = Number(item.precio.replace("$", ''))
        total = total + precio * item.cantidad
    })

    itemTotal.innerHTML = `Total $ ${total}`
    addLocalStorage()
}

function borrarProducto(e) {
    const buttonBorrar = e.target
    const tr = buttonBorrar.closest(".ItemCarrito")
    const title = tr.querySelector(".title").textContent;
    for (let i = 0; i < carrito.length; i++){
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    total()
}

function sumaCantidad(e) {
    const suma = e.target
    const tr = suma.closest(".ItemCarrito")
    const title = tr.querySelector(".title").textContent;

    carrito.forEach(item => {
        if (item.title.trim() === title){
            suma.value < 1 ? (suma = 1) : suma.value;
            item.cantidad = suma.value;
            total()
        }
    })
        
}

function addLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'))
    if(storage){
        carrito = storage;
        renderCarrito()
    }
}