//BASIC OPERATIONS

var a= 2;
var b= 8;
var c= (a + b);

//ADD

console.log(a + b);
console.log(c);

//Subtract
var cost= 4;
var sell= 9;

var utility = sell - cost;

console.log (utility);

// a * b = c Multiply 


// a / b = c Divide


// a % b = c Residuo
var numero = 9;
var divisor = 4;
var residuo = numero % divisor;
console.log(residuo); // respuesta 1, porque 9/4= 2.1, me sobra ese uno


var numero = 9;
function isEven(num) { //Mi funcion es para reutilizar mi codigo muchas veces
    if (num % 2 == 0) {
        console.log ("even");
    } else {
        console.log ("odd");
    }
}

isEven(9);
isEven (4);

// //
// var nom = "Paola"
// console.log('Hola ' + nom);

// function saludo (nom) {
//     console.log ("hola " + nom); 
   
// }

// saludo (nom)


// var rutina = ["me despierto ", "me lavo los dientes ", "me arreglo ", "desayuno " ];
// rutina.forEach (function (value){
// alert ("Todos los días yo " + value + "menos los domingos" );
// });

// var sorpresa = ["globos ", "serpentinas ", "confetti"];
// sorpresa.forEach (function (value) {
//     alert ("Te tengo una sorpresa y traje " + value);
// })
// fiesta (sorpresa)

//esta funcion de sorpresa con forEach es lo mismo que hacerla asi sólo con For://

// var sorpresa = ["globos ", "serpentinas ", "confetti"];
// for(var i = 0; i<sorpresa.length; i++){
//     console.log("Mi sorpresa es: " + sorpresa[i])
// }

//Otro ejercicio://
// var pan = ["conchas" , " bolillos ", " y polvorones"]

// function harina (pan) {
//     console.log ("quiero comer muchas " + pan);
// }

// harina(pan)


