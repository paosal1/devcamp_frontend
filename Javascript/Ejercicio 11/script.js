// 1. Utilizando la funcionalidad innerHTML de javascript, crea una etiqueta DIV con texto dentro e imprime dicho texto en la consola de javascript.
// 2. Crea una función que actualice el contenido del DIV que creaste en el ejercicio 1 haciendo click a un botón (se debe usar la propiedad onclick en dicho botón).
// 3. Utilizando innerHTML crea una lista ordenada dentro del DIV creado en el ejercicio 1 y, a continuación, inserta elementos a dicha lista utilizando un ciclo for (puede ser una lista del super).
// 4. Cambia el color del texto y tipo de letra de todos los elementos de la lista que creaste en el punto número 3.
// 5. Crea otro botón que, al darle click, muestre y esconda la primer etiqueta DIV que creaste (recuerda las propiedades de CSS que vimos en el curso).


var tarea = document.getElementById("texto").innerHTML;
console.log (tarea)



var element = document.getElementById('texto');
 
     element.style.color = 'blue'
     element.style.fontSize = '100px'
 
 console.log (element.style)

 var lista = document.getElementById('lista');

 var arreglo = ["leche ", "huevos ", "pan ", "queso ", "verduras"]

 for (var i = 0; i<arreglo.length; i++){
     lista.innerHTML+="<li>"+arreglo[i]+"</li><br><hr>"
 }
 
lista.style.color= 'red'
lista.style.fontSize = '40px'

 function changetext () {
     element.innerHTML = 'The text has now changed'
 }

 function showAndHide(){
     if (element.style.display == "none"){
         element.style.display = 'block'
        }
    else{
        element.style.display = 'none'
        }
 }
 