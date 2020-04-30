
import harryData  from './data/potter/potter.js';
console.log(harryData.length);


for (var i = 0; i < harryData.length; ++i) {
 
  let div = document.createElement('div');
div.id = 'd'+i;
//div.classList = 'tarjetaPersonaje';

document.body.appendChild(div);
 var id_div = 'd'+i;
document.getElementById(id_div).innerHTML='<img class="tarjetaPersonaje" src='+harryData[i].image+' />';
 // console.log(harryData[i].name);
 // console.log(harryData[i].image);

   
}


//document.getElementById("seccionMensajes").style.display="block";  //mostrar

let div = document.createElement('div');
div.id = 'pagina1';

document.body.appendChild(div);

document.getElementById("pagina1").innerHTML='<img id="logo1" src="./imagenes/logo6.png" />';

let parrafo = document.createElement("p");
parrafo.id = 'textoPagina1'
let texto = document.createTextNode("Conoce el Mundo de Harry Potter.");
parrafo.appendChild(texto);

let elemento = document.getElementById("pagina1");
elemento.appendChild(parrafo);

let button = document.createElement("button");
button.id = 'entrar'
button.innerHTML = "Entrar";

div.appendChild(button);



let div2 = document.createElement('div');
div2.id = 'pagina2';

document.body.appendChild(div2);

document.getElementById("pagina2").innerHTML='<img id="logo2" src="./imagenes/logoharrypotter 1.png" />';

let parrafo2 = document.createElement("p");
parrafo2.id = 'textoPagina2'
let texto2 = document.createTextNode("Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los padres de Harry en su afán de conquistar el mundo mágico.Desde el lanzamiento de la primera novela, Harry Potter y la piedra filosofal, en 1997, la serie logró una inmensa popularidad, críticas favorables y éxito comercial alrededor del mundo.1​ Para julio de 2013 se habían vendido entre 400 y 450 millones de ejemplares de los siete libros, que los ubican como la serie de libros más vendida de la historia y los cuales han sido traducidos a más de 65 idiomas, entre los que se incluyen el latín y el griego antiguo.​ El séptimo y último libro, Harry Potter y las reliquias de la Muerte, fue lanzado mundialmente en inglés el 21 de julio de 2007, mientras que en español se publicó el 21 de febrero de 2008.​");
parrafo2.appendChild(texto2);

let elemento2 = document.getElementById("pagina2");
elemento2.appendChild(parrafo2);

document.getElementById("header").style.display="none"; //esconder
document.getElementById("pagina2").style.display="none"; //esconder



button.addEventListener ("click", function() {
  document.getElementById("header").style.display="block"; 
  document.getElementById("pagina2").style.display="block";
 

  document.getElementById("pagina1").style.display="none"; //esconder

});
/*
var vid = document.createElement("video");
vid.setAttribute("src", "./video/hpv.mp4");
vid.setAttribute("id", "video1");
vid.autoplay = true;
vid.load();

elemento2.appendChild(vid);*/
 

pruebaaaaaaa




