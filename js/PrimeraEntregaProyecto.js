// const packs = [{id: 1, producto:"pack-5", precio:350},
//                {id: 2, producto:"pack-8", precio:650},
//                {id: 4, producto:"pack-15", precio:1850}];
// const planes = packs.find(producto => producto.producto === "pack-5"); // buscamos el pack-5
// const planes2 = packs.filter(producto => producto.precio < 1000); //Filtramos un plan por de bajo de $1000.
// const planes3 = packs.map(producto => producto.precio * 1.21) //Agreamos IVA.
// console.log(planes);
// console.log(planes2);
// console.log(planes3);

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

//    let logueado = false;
//    do {
//    let usuario = prompt("Ingrese su usuario: ");
//    let contrasena = prompt("Ingrese su contraseña: ");
//    if ((usuario == "") && (contrasena == "")) {
//    alert("no has ingresado nada.");
//    }
//    if ((usuario == "franco") && (contrasena == "****")) {
//      logueado = true
//    alert("Tu usuario es: " + usuario + "\nTu contraseña es: " + contrasena)
//    } else {
//    alert("su usuario o contraseña son incorrectas.");
//     console.log(logueado);}
//     } while (logueado == false);

// let planElegido = prompt("Tenemos todos tipos de planes, elige el que mas te guste: \n5Gb - 8Gb - 15Gb.\nEj: pack8.")
// planesMobiles1.mensajePrecio();

let envio = 350;
let consulta = prompt("El envio del chip tiene un valor de acuerdo a su provincia. Ingrese el nombre de su provincia para calcular el costo del envio. De lo contrario ingrese 'NO' para retiro en local de Cordoba. \n(Para poder calcular el costo del envio por favor escriba todo junto y en minuscula su provincia. Ej: tierradelfuego.)")
class Provincias {
    constructor (buenosaires, catamarca, chaco, chubut, cordoba, corrientes, formosa, jujuy, lapampa, larioja, mendoza, misiones, neuquen, rionegro, salta, sanjuan, sanluis, santacruz, santafe, santiagodelestero, tierradelfuego, tucuman) {
       this.buenosaires = buenosaires;
       this.catamarca = catamarca;
       this.chaco = chaco;
       this.chubut = chubut;
       this.cordoba = cordoba;
       this.corrientes = corrientes;
       this.formosa = formosa;
       this.jujuy = jujuy;
       this.lapampa = lapampa;
       this.larioja = larioja;
       this.mendoza = mendoza;
       this.misiones = misiones;
       this.neuquen = neuquen;
       this.rionegro = rionegro;
       this.salta = salta;
       this.sanjuan = sanjuan;
       this.sanluis = sanluis;
       this.santacruz = santacruz;
       this.santafe = santafe;
       this.santiagodelestero = santiagodelestero;
       this.tierradelfuego = tierradelfuego;
       this.tucuman = tucuman;
       this.IVA = 1.21;
       this.no = this.no;
     }
       costoProvioncias(){
         console.log(consulta)
       switch (consulta) {
         case "buenosaires": {
           alert("El costo de envio a su provincia + IVA: $" + this.buenosaires * this.IVA)
         } break;
         case "catamarca": {
           alert("El costo de envio a su provincia + IVA: $" + this.catamarca * this.IVA)
         } break;
         case "chaco": {
           alert("El costo de envio a su provincia + IVA: $" + this.chaco * this.IVA)
         } break;
         case "chubut": {
            alert("El costo de envio a su provincia + IVA: $" + this.chubut * this.IVA)
          } break;
         case "cordoba": {
           alert("El costo de envio a Cordoba es gratis: $" + this.cordoba * this.IVA)
         } break;
         case "corrientes": {
           alert("El costo de envio a su provincia + IVA: $" + this.corrientes * this.IVA)
         } break;
         case "formosa": {
           alert("El costo de envio a su provincia + IVA: $" + this.formosa * this.IVA)
         } break;
         case "jujuy": {
           alert("El costo de envio a su provincia + IVA: $" + this.jujuy * this.IVA)
         } break;
         case "lapampa": {
           alert("El costo de envio a su provincia + IVA: $" + this.lapampa * this.IVA)
         } break;
         case "larioja": {
           alert("El costo de envio a su provincia + IVA: $" + this.larioja * this.IVA)
         } break;
         case "mendoza": {
           alert("El costo de envio a su provincia + IVA: $" + this.mendoza * this.IVA)
         } break;
         case "misiones": {
           alert("El costo de envio a su provincia + IVA: $" + this.misiones * this.IVA)
         } break;
         case "neuquen": {
           alert("El costo de envio a su provincia + IVA: $" + this.neuquen * this.IVA)
         } break;
         case "rionegro": {
           alert("El costo de envio a su provincia + IVA: $" + this.rionegro * this.IVA)
         } break;
         case "salta": {
           alert("El costo de envio a su provincia + IVA: $" + this.salta * this.IVA)
         } break;
         case "sanjuan": {
           alert("El costo de envio a su provincia + IVA: $" + this.sanjuan * this.IVA)
         } break;
         case "sanluis": {
           alert("El costo de envio a su provincia + IVA: $" + this.sanluis * this.IVA)
         } break;
         case "santacruz": {
           alert("El costo de envio a su provincia + IVA: $" + this.santacruz * this.IVA)
         } break;
         case "santafe": {
           alert("El costo de envio a su provincia + IVA: $" + this.santafe * this.IVA)
         } break;
         case "santiagodelestero": {
           alert("El costo de envio a su provincia + IVA: $" + this.santiagodelestero * this.IVA)
         } break;
         case "pack15": {
           alert("El costo de envio a su provincia + IVA: $" + this.tierradelfuego * this.IVA)
         } break;
         case "tucuman": {
           alert("El costo de envio a su provincia + IVA: $" + this.tucuman * this.IVA)
         } break;
         case "no": {
           alert("Puede retirar el chip de aca 4 dias habiles en la sucursal de Nuevo Centro Shopping, Cordoba.")
         } break;
       }
       alert("Su chip llegara en 4 a 6 dias habiles, Gracias por elegirnos. ¡MoviSpace!")
    }
}

let provincias1 = new Provincias (150,150,300,450,0,300,300,450,450,150,150,300,450,450,300,300,150,600,150,750,300)
console.log(provincias1);
provincias1.costoProvioncias();
    