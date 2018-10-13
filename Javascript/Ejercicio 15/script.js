// var empleado = {
//     nombre: 'Paola Salcedo',
//     rfc: 3479170823,
//     salario: 1,
//     puesto: 'La que todo lo puede',
//     departamento: 'Dirección',
//     persona: {
//         dirección: 'Lindavista',
//         edad: 25,
//         fechaNacimiento: '12 de agosto'

//     },
//     dirigir: function(){
//         console.log ('Dirigir');
//     },
//     reir: function(){
//         console.log ('reir')
//     },
//     saludar: function(nombre){
//         console.log ('Hola ' + nombre);
//     }
// };

// console.log (empleado.nombre)
// console.log (empleado.rfc)
// empleado.reir() //función
// console.log (empleado.persona.fechaNacimiento)
// console.log (empleado.persona.edad) 
// empleado.saludar('Paola')


// //Ejercicio: asignar un arreglo, booleano, numero, string y objetos

// var pasajeroUno = {
//     nombre: 'Paola',
//     apellido: 'Salcedo',
//     edad: 25,
//     sexo: 'femenino',
// };

// var pasajeroDos = {
//     nombre: 'Ivonne',
//     apellido: 'Gzz',
//     edad: 25,
//     sexo: 'femenino',
// };
// var vuelo = {
//     numeroVuelo: 8263,
//     origen: 'Monterrey',
//     destino: 'Cancún',
//     salida: '17:55pm',
//     llegada: '8:06pm',
//     costo: '$3000 mxn',
//     pasajeros: [pasajeroUno, pasajeroDos],
//     estaLleno: false,
//     piloto: {
//         name: 'Luis Fernando Salcedo Delgado',
//         edad: 55,
//         nacionalidad: 'mexicano',
//         aerolinea: 'Aeroméxico'
//     },
//     despegar: function(){
//         console.log ('despegar')
//     },
//     abordar: function(){
//         console.log ('abordar')
//     },
//     aterrizar: function (){
//         console.log ('aterrizar')
//     },
// };



// console.log (vuelo.numeroVuelo)
// console.log (vuelo.destino)
// console.log (vuelo.llegada)
// console.log (vuelo.pasajeros)
// console.log ('Mi vuelo estaá lleno? ' + vuelo.estaLleno)
// vuelo.abordar()
// vuelo.aterrizar()

//Ejemplo de clases con figuras

// class Figura {
//     constructor(numeroDeLados, medidaDeUnLado){ //En Javascript no se pueden declarar las clases fuera del constructor
//         this.numeroDeLados = numeroDeLados;
//         this.medidaDeUnLado = medidaDeUnLado;
//     }

//     perimetro(){
//         return this.numeroDeLados * this.medidaDeUnLado // esto es un método
//     }
// }
// var circulo = new Figura(0,3);
// var triangulo = new Figura(3, 3);
// var cuadrado = new Figura(4,2);
// var pentagono = new Figura (5,4)
// console.log (circulo);
// console.log (triangulo);
// console.log (cuadrado);
// console.log (pentagono);
// console.log (triangulo.perimetro());


//Crear una clase para hacer diferentes vuelos con sus propiedades
class Vuelo {
    constructor(numeroDeVuelo, Salida, Llegada, Origen, Destino){ 
        this.numeroDeVuelo = numeroDeVuelo;
        this.Salida = Salida;
        this.Llegada=Llegada;
        this.Origen=Origen;
        this.Destino=Destino;
    }
}
    var vueloUno = new Vuelo (1934, "13:45pm", "14:55", "Guadalajara", "Ciudad de Mexico"); //objeto 1 con 5 propiedades
    var vueloDos = new Vuelo (8492, "5:40am", "7:00am", "Los Cabos", "Michoacan") //objeto 2 con 5 propiedades
    var vueloTres = new Vuelo (3281, "8:00am", "10:30a,", "Nueva York", "Londres") //objeto 3 con 5 propiedades

    console.log (vueloUno)
    console.log (vueloDos)
    console.log (vueloTres)