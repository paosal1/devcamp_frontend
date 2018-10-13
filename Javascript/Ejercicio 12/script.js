var div = document.getElementById('elemento').innerHTML;

var element = document.getElementById('elemento');
 
     element.style.color = 'blue'
     element.style.fontSize = '100px'
 
 console.log (element.style)

 function showAndHide(){
    if (element.style.display == "none"){
        element.style.display = 'block'
       }
   else{
       element.style.display = 'none'
       }
}

// var element = document.getElementById("boton");
//     element.style.color = 'green'