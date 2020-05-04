import harryData from './data/potter/potter.js';
console.log(harryData);


crearElement('div', 'pageOne', 'root');
crearElement('IMG', "logoOne", "pageOne", '', '', "./imagenes/logo6.png");
crearElement('p', 'textPageOne', 'pageOne', '', "Conoce el Mundo de Harry Potter.");
crearElement('button', 'enter', 'pageOne', '', "Entrar");
crearElement('div', 'pageThree', 'root');
crearElement('div', 'pageTwo', 'root');
crearElement('IMG', "logoTwo", "pageTwo", '', '', "./imagenes/logoharrypotter 1.png");
const textSummaryHistory = "Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los padres de Harry en su afán de conquistar el mundo mágico.Desde el lanzamiento de la primera novela, Harry Potter y la piedra filosofal, en 1997, la serie logró una inmensa popularidad, críticas favorables y éxito comercial alrededor del mundo.1​ Para julio de 2013 se habían vendido entre 400 y 450 millones de ejemplares de los siete libros, que los ubican como la serie de libros más vendida de la historia y los cuales han sido traducidos a más de 65 idiomas, entre los que se incluyen el latín y el griego antiguo.​ El séptimo y último libro, Harry Potter y las reliquias de la Muerte, fue lanzado mundialmente en inglés el 21 de julio de 2007, mientras que en español se publicó el 21 de febrero de 2008.​";
crearElement('p', 'textPageTwo', 'pageTwo', '', textSummaryHistory);

//empieza creacion modal
//function crearElement(tipo, id, id_padre, clase, texto, rutaSrc) {
  crearElement('div', 'modalCharacters', 'root','modal');
  crearElement('div', 'contentModal', 'modalCharacters','cModal');
  crearElement('div', 'headerModal', 'contentModal','hModal');
  crearElement('div', 'bodyModal', 'contentModal','bModal');
  crearElement('div', 'footerModal', 'contentModal','fModal');
  crearElement('button', 'closeModal', 'footerModal', '','Salir');

//termina creacion modal

const header= document.getElementById("header");
const pag1= document.getElementById("pageOne");
const pag2= document.getElementById("pageTwo");
const buttonEnter= document.getElementById("enter");
const buttonMenuCharacters = document.getElementById("menuCharacters");
const buttonExitModal = document.getElementById("closeModal");
const modal = document.getElementById('modalCharacters');
header.style.display = "none"; //esconder
pag2.style.display = "none"; //esconder

buttonEnter.addEventListener ("click", function() {

  header.style.display="block";
  pag2.style.display="block";
  pag1.style.display="none";

});



buttonMenuCharacters.addEventListener ("click", function() {

document.getElementById("pageTwo").style.display="none";
  removeElement('pageThree');
  crearElement('div', 'pageThree', 'root');
  getDataCharacters();

});

buttonExitModal.addEventListener ("click", function() {

    modal.style.display = "none";
  removeElement('dataCharacters');


  });

function crearElement(tipo, id, id_padre, clase, texto, rutaSrc) {
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

function getDataCharacters() {

  crearElement('div', 'filter', 'pageThree');
  crearElement('div', 'selector', 'filter','select');

  crearElement('select', 'filterGenero', 'selector','Filtroselect');
  crearElement('option', '', 'filterGenero', '', "Seleccione Genero");
  crearElement('option', '', 'filterGenero', '', "Femenino");
  crearElement('option', '', 'filterGenero', '', "Masculino");

  crearElement('select', 'filterRol', 'selector','Filtroselect');
  crearElement('option', '', 'filterRol', '', "Seleccione Rol");
  crearElement('option', '', 'filterRol', '', "Estudiante");
  crearElement('option', '', 'filterRol', '', "Profesor");



  for (var i = 0; i < harryData.length; ++i) {

    let id_div = 'd' + i;
    let id_parrf = 'pNom' + i;
    let id_img = 'imgPers' + i;

    crearElement('div', id_div, 'pageThree', 'parchment');
    crearElement('IMG', id_img, id_div, 'characterCard', '', harryData[i].image);
    crearElement('p', id_parrf, id_div, 'parrafoName', harryData[i].name);

    const btnImg= document.getElementById(id_img);
    const contador= i;
    btnImg.addEventListener ("click", function() {

      removeElement('dataCharacters');
      modal.style.display = "block";
      crearElement('div', 'dataCharacters', 'bodyModal','infoPersonajes');
      crearElement('IMG', "imagenMo", "dataCharacters", 'cardModal', '', harryData[contador].image);
      crearElement('p', 'nameModal', 'dataCharacters', '', harryData[contador].name);

    });

   // var arrayWand = harryData[i].wand;
    //console.log(arrayWand.wood);

  }
}
