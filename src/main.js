
import POTTER from './data/potter/potter.js';
//crear boton
let  button = document.createElement("button");
button.innerHTML = "Entrar";
//se añade al body
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);
//controlador de evento
button.addEventListener ("click", function() {
    alert("Entrar");
  });

 document.getElementById("inicio").innerHTML='<img src="./imagenes/logo6.png" />';

  //let contenedorLogoInicio = document.createElement ("div");
 // contenedorLogoInicio.setAttribute("id", "logoInicio");
  //let img = document.createElement('img');
//img.src = './imagenes/logo6.png';
//document.getElementById('logoInicio').appendChild(img)

//let currentContenedorLogoInicio = document.getElementById("logoInicio"); 
//document.body.insertBefore(contenedorLogoInicio, currentContenedorLogoInicio); 


  let newDiv = document.createElement("div"); 
  newDiv.setAttribute("id", "firstPage");
  let newContent = document.createTextNode("Conoce el Mundo de Harry Potter"); 
  newDiv.appendChild(newContent); //añade texto al div creado. 
  

  // añade el elemento creado y su contenido al DOM 
  let  currentDiv = document.getElementById("firstPage"); 
  document.body.insertBefore(newDiv, currentDiv); 

 
  
console.log(example, data);
