var color = ["#5ac377", '#0099bf', '#780078', '#ffff66', '#576170']; //lenght = 5
//index maximo puede ser 4
var index = 0;
var element = document.getElementById('background');

//Asignar el color a cada elemento
element.style.backgroundColor = color[index]

function changecolor(){
    index++;

//Necesitamos validar si index es igual o menor al numero de elementos del arreglo (Menos 1)
if (index < color.length){
    element.style.backgroundColor = color[index]
} else {
    index = 0;
    element.style.backgroundColor = color[index]
}
}

//Esto es lo mismo que hacer el if anterior pero con menos lineas de codigo
// if (index >= color.length){
//     index = 0;
// }
//     element.style.backgroundColor = color[index];
// }

//Ahora veremos como correr los colores de forma aleatoria

var index = Math.floor (Math.random() * color.length);
function changecolorrandom(){
    index=Math.floor (Math.random() * color.length);
    element.style.backgroundColor = color[index];
    element.innerHTML = index;
}

