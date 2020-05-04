import harryData from './data/potter/potter.js';
console.log(harryData);


crear_elemento('div', 'pagina1', 'root');
crear_elemento('IMG', "logo1", "pagina1", '', '', "./imagenes/logo6.png");
crear_elemento('p', 'textoPagina1', 'pagina1', '', "Conoce el Mundo de Harry Potter.");
crear_elemento('button', 'entrar', 'pagina1', '', "Entrar");
crear_elemento('div', 'pagina3', 'root');
crear_elemento('div', 'pagina2', 'root');
crear_elemento('IMG', "logo2", "pagina2", '', '', "./imagenes/logoharrypotter 1.png");
var textoResumenHistoria = "Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los padres de Harry en su afán de conquistar el mundo mágico.Desde el lanzamiento de la primera novela, Harry Potter y la piedra filosofal, en 1997, la serie logró una inmensa popularidad, críticas favorables y éxito comercial alrededor del mundo.1​ Para julio de 2013 se habían vendido entre 400 y 450 millones de ejemplares de los siete libros, que los ubican como la serie de libros más vendida de la historia y los cuales han sido traducidos a más de 65 idiomas, entre los que se incluyen el latín y el griego antiguo.​ El séptimo y último libro, Harry Potter y las reliquias de la Muerte, fue lanzado mundialmente en inglés el 21 de julio de 2007, mientras que en español se publicó el 21 de febrero de 2008.​";
crear_elemento('p', 'textoPagina2', 'pagina2', '', textoResumenHistoria);

//empieza creacion modal
//function crear_elemento(tipo, id, id_padre, clase, texto, rutaSrc) {
  crear_elemento('div', 'modalPersonajes', 'root','modal');
  crear_elemento('div', 'contenidoModal', 'modalPersonajes','cModal');
  crear_elemento('div', 'headerModal', 'contenidoModal','hModal');
  crear_elemento('div', 'bodyModal', 'contenidoModal','bModal');
  crear_elemento('div', 'footerModal', 'contenidoModal','fModal');
  crear_elemento('button', 'cierreModal', 'footerModal', '','Salir');

//termina creacion modal

const header= document.getElementById("header");
const pag1= document.getElementById("pagina1");
const pag2= document.getElementById("pagina2");
const buttonEntrar= document.getElementById("entrar");
const buttonMenuPersonajes = document.getElementById("menuPersonajes");
const buttonSalirModal = document.getElementById("cierreModal");
const modal = document.getElementById('modalPersonajes');
header.style.display = "none"; //esconder
pag2.style.display = "none"; //esconder

buttonEntrar.addEventListener ("click", function() {

  header.style.display="block";
  pag2.style.display="block";
  pag1.style.display="none";

});



buttonMenuPersonajes.addEventListener ("click", function() {

document.getElementById("pagina2").style.display="none";
  removeElement('pagina3');
  crear_elemento('div', 'pagina3', 'root');
  getDataPersonajes();

});

  buttonSalirModal.addEventListener ("click", function() {

    modal.style.display = "none";
  removeElement('dataPersonajes');


  });

function crear_elemento(tipo, id, id_padre, clase, texto, rutaSrc) {
  let elememto = document.createElement(tipo);
  if (typeof id !== 'undefined' && id != '') {
    elememto.id = id;
  }

  if (typeof clase !== 'undefined' && clase != '') {
    elememto.classList = clase;
  }
  if (typeof rutaSrc !== 'undefined') {
    elememto.src = rutaSrc;
  }
  if (typeof texto !== 'undefined') {
    let texto2 = document.createTextNode(texto);
    elememto.appendChild(texto2);
  }

  let elementoPadre = document.getElementById(id_padre);
  elementoPadre.appendChild(elememto);
}

function removeElement(elementId) {

  if ( document.getElementById(elementId)) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }

}

function getDataPersonajes() {

  crear_elemento('div', 'filtro', 'pagina3');
  crear_elemento('div', 'selector', 'filtro','select');

  crear_elemento('select', 'filtroGenero', 'selector','Filtroselect');
  crear_elemento('option', '', 'filtroGenero', '', "Seleccione Genero");
  crear_elemento('option', '', 'filtroGenero', '', "Femenino");
  crear_elemento('option', '', 'filtroGenero', '', "Masculino");

  crear_elemento('select', 'filtroRol', 'selector','Filtroselect');
  crear_elemento('option', '', 'filtroRol', '', "Seleccione Rol");
  crear_elemento('option', '', 'filtroRol', '', "Estudiante");
  crear_elemento('option', '', 'filtroRol', '', "Profesor");



  for (var i = 0; i < harryData.length; ++i) {

    let id_div = 'd' + i;
    let id_parrf = 'pNom' + i;
    let id_img = 'imgPers' + i;

    crear_elemento('div', id_div, 'pagina3', 'pergamino');
    crear_elemento('IMG', id_img, id_div, 'tarjetaPersonaje', '', harryData[i].image);
    crear_elemento('p', id_parrf, id_div, 'parrafoName', harryData[i].name);

    const btnImg= document.getElementById(id_img);
    const contador= i;
    btnImg.addEventListener ("click", function() {

      removeElement('dataPersonajes');
      modal.style.display = "block";
      crear_elemento('div', 'dataPersonajes', 'bodyModal','infoPersonajes');
      crear_elemento('IMG', "imagenMo", "dataPersonajes", 'tarjetaPersonajeModal', '', harryData[contador].image);
      crear_elemento('p', 'nombreModal', 'dataPersonajes', '', harryData[contador].name);

    });

   // var arrayWand = harryData[i].wand;
    //console.log(arrayWand.wood);

  }
}
