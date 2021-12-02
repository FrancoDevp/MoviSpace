// class PlanesMobiles {
//     constructor (pack5, pack8, pack15) {
//        this.pack5 = pack5;
//        this.pack8 = pack8;
//        this.pack15 = pack15;
//      }
//        mensajePrecio(){
//          console.log(planElegido)
//        switch (planElegido) {
//          case "pack5": {
//            alert("Este plan tiene el costo de $" + this.pack5)
//          } break;
//          case "pack8": {
//            alert("Este plan tiene el costo de $" + this.pack8)
//          } break;
//          case "pack15": {
//            alert("Este plan tiene el costo de $" + this.pack15)
//          } break;
//        }
//        alert("Su plan elegido es el " + planElegido)
//     }
// }

// let planesMobiles1 = new PlanesMobiles (350, 650, 1850);
//    console.log(planesMobiles1);
//    alert("Bienvenido a ¡MoviSpace!")

// let planElegido = prompt("Tenemos todos tipos de planes, elige el que mas te guste: \n5Gb - 8Gb - 15Gb.\nEj: pack8.")
// planesMobiles1.mensajePrecio();


    

// -----------------------------
let precios = [150,150,300,450,0,300,300,450,450,150,150,300,450,450,300,300,150,600,150,750,300,300];
const provincias = ["buenos aires", "catamarca", "chaco", "chubut", "cordoba", "corrientes", "formosa", "jujuy", "la pampa", "la rioja", "mendoza", "misiones", "neuquen", "rio negro", "salta", "san juan", "san luis", "santa cruz", "santa fe", "santiago del estero", "tierra del fuego", "tucuman"];

const localidadesDom = document.getElementById("provincias")
for (let i = 0; i < provincias.length; i++) {
let option = document.createElement("option")
option.appendChild(new Option(provincias[i] + " $" + precios[i],precios[i]))
localidadesDom.appendChild(option)
}
