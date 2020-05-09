import harryData from './data/potter/potter.js';
//console.log(harryData);


crearElement('div', 'pageOne', 'root');
crearElement('IMG', "logoOne", "pageOne", '', '', "./imagenes/logo6.png");
crearElement('p', 'textPageOne', 'pageOne', '', "Conoce el Mundo de Harry Potter");
crearElement('button', 'enter', 'pageOne', '', "Entrar");
crearElement('div', 'pageThree', 'root');
crearElement('div', 'pageTwo', 'root');
// crearElement('IMG', "logoTwo", "pageTwo", '', '', "./imagenes/logoharrypotter 1.png");
crearElement('IMG', "logoTwo", "pageTwo", '', '', "./imagenes/tituloHistoriaVideo.png");
const textSummaryHistory = "Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería. El argumento se centra en la lucha entre Harry Potter y el malvado mago Lord Voldemort, quien asesinó a los padres de Harry en su afán de conquistar el mundo mágico.Desde el lanzamiento de la primera novela, Harry Potter y la piedra filosofal, en 1997, la serie logró una inmensa popularidad, críticas favorables y éxito comercial alrededor del mundo.1​ Para julio de 2013 se habían vendido entre 400 y 450 millones de ejemplares de los siete libros, que los ubican como la serie de libros más vendida de la historia y los cuales han sido traducidos a más de 65 idiomas, entre los que se incluyen el latín y el griego antiguo.​ El séptimo y último libro, Harry Potter y las reliquias de la Muerte, fue lanzado mundialmente en inglés el 21 de julio de 2007, mientras que en español se publicó el 21 de febrero de 2008.​";
crearElement('p', 'textPageTwo', 'pageTwo', '', textSummaryHistory);


//empieza creacion modal
//function crearElement(tipo, id, id_padre, clase, texto, rutaSrc) {
  crearElement('div', 'modalCharacters', 'root','modal');
  crearElement('div', 'contentModal', 'modalCharacters','cModal');
  crearElement('div', 'headerModal', 'contentModal','hModal');
  crearElement('div', 'bodyModal', 'contentModal','bModal');
  crearElement('div', 'footerModal', 'contentModal','fModal');
  crearElement('p', 'closeModal', 'footerModal', '','X');

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
  crearElement('div', 'contentVideo', 'pageTwo');
  crearElement('video', "videoPresentation", "contentVideo", '', '', "./video/hpv.mp4");
  header.style.display="block";
  pag2.style.display="block";
  pag1.style.display="none";
  document.getElementById('videoPresentation').play();

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



function crearElement(tipo, id, id_padre, clase, texto, rutaSrc,optionValue) {
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
  if(tipo === 'option' && typeof optionValue !== 'undefined'){
    elememto.value=optionValue;
  }

  if (typeof texto !== 'undefined') {
    let texto2 = document.createTextNode(texto);
    elememto.appendChild(texto2);
  }

  let elementoPadre = document.getElementById(id_padre);
  elementoPadre.appendChild(elememto);
}

function removeElement(elementId) {

  if (document.getElementById(elementId)) {//solo cuando exista el elemento se podrá borrar o remover del html(formato del if(está instruccion es true o false)
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
  }

}

function getDataCharacters() {//empiez

  // crearElement('p', 'tittlePageThree', 'pageThree', '', "Filtrar por");
  crearElement('div', 'filter', 'pageThree');
  crearElement('div', 'selector', 'filter','select');

  crearElement('select', 'filterGenero', 'selector','Filtroselect');
  crearElement('option', '', 'filterGenero', '', "Seleccione un género",'','all');
  crearElement('option', '', 'filterGenero', '', "Femenino",'','female');
  crearElement('option', '', 'filterGenero', '', "Masculino",'','male');

  crearElement('select', 'filterRol', 'selector','Filtroselect');
  crearElement('option', '', 'filterRol', '', "Seleccione un rol",'','all');
  crearElement('option', '', 'filterRol', '', "Estudiante",'','student');
  crearElement('option', '', 'filterRol', '', "Profesor",'','teacher');
  crearElement('option', '', 'filterRol', '', "Otros",'','other');

  crearElement('select', 'filterOrdenAlfabetic', 'selector','Filtroselect');
  crearElement('option', '', 'filterOrdenAlfabetic', '', "Seleccione un orden",'','all');
  crearElement('option', '', 'filterOrdenAlfabetic', '', "Ascendente (A-Z)",'','az');
  crearElement('option', '', 'filterOrdenAlfabetic', '', "Descendente (Z-A)",'','za');

  listCharacterPotter (harryData);//cuando hace click en personajes


//de aqui para adelante es cuando el usuario cambia el selector genero
  const selectGender = document.getElementById("filterGenero");

  selectGender.addEventListener("change", function() {//cuando cambie el selector genero

    removeData();//invocamos funcion que remueve todos los div de las tarjetas de los personajes generados en el bucle
    if(selectGender.value == 'all'){//aqui el usuario eligió todos los generos
      listCharacterPotter (harryData); //por lo tanto invocamos la funcion listCharacterPotter pasando como parametros toda la data
    }else{
      let arrayFiltrado = window.data.filterGender(harryData,selectGender.value);
      listCharacterPotter(arrayFiltrado);
      //si no es all, se invoca la funcion del data js llamada filterGender, pasando como parametro data completa(harryData) y el value del selector seleccionado por el usuario
    }
  });

//de aqui para adelante es cuando el usuario cambia el selector rol
const selectRol = document.getElementById("filterRol");

selectRol.addEventListener("change", function() {//cuando cambie el selector genero

  removeData();//invocamos funcion que remueve todos los div de las tarjetas de los personajes generados en el bucle
  if(selectRol.value == 'all'){//aqui el usuario eligió todos los generos
    listCharacterPotter (harryData); //por lo tanto invocamos la funcion listCharacterPotter pasando como parametros toda la data
  }else{
    let arrayFiltrado = window.data.filterRol(harryData,selectRol.value);
    listCharacterPotter(arrayFiltrado);
    //si no es all, se invoca la funcion del data js llamada filterGender, pasando como parametro data completa(harryData) y el value del selector seleccionado por el usuario
  }
});





}//ter





function listCharacterPotter (arrayCharacterPotter){//aqui recibo el arreglo filtrado o arreglo con toda la data

  for (let i = 0; i < arrayCharacterPotter.length; ++i) {


    let id_div = 'd' + i;
    let id_parrf = 'pNom' + i;
    let id_img = 'imgPers' + i;


    crearElement('div', id_div, 'pageThree', 'parchment');
    crearElement('IMG', id_img, id_div, 'characterCard', '', arrayCharacterPotter[i].image);
    crearElement('p', id_parrf, id_div, 'parrafoName', arrayCharacterPotter[i].name);

    const btnImg= document.getElementById(id_div);
    const contador= i;

    btnImg.addEventListener ("click", function() {//click imagen pergamino para levantar modal, en donde remueve el body del modal para cargar nuevo elemento clickeado

      removeElement('dataCharacters');
      modal.style.display = "flex";
      crearElement('div', 'dataCharacters', 'bodyModal','infoPersonajes');
      crearElement('IMG', "imagenMo", "dataCharacters", 'cardModal', '', arrayCharacterPotter[contador].image);
      crearElement('p', 'nameModal', 'dataCharacters', '', "Nombre:" + " " + arrayCharacterPotter[contador].name);
      crearElement('p', 'nameModal', 'dataCharacters', '', "Fecha nacimiento:" + " " + arrayCharacterPotter[contador].dateOfBirth);
      crearElement('p', 'nameModal', 'dataCharacters', '', "Ascendencia:" + " " + arrayCharacterPotter[contador].ancestry);
      crearElement('p', 'nameModal', 'dataCharacters', '', "Color de ojos: " + " " + traslation(arrayCharacterPotter[contador].eyeColour));
      crearElement('p', 'nameModal', 'dataCharacters', '', "Color de pelo: " + " " + traslation(arrayCharacterPotter[contador].hairColour));

    });

    // var arrayWand = arrayCharacterPotter[i].wand;
    //console.log(arrayWand.wood);

  }

}

function removeData(){
  for (let i= 0; i<harryData.length; i++){
    let id_div = 'd' + i;
    removeElement(id_div);
  }
}
// TRADUCCION DATOS DEL MODAL
function traslation(word){
  if(word == "green"){
    return "verde";

  }else if(word == "brown"){
    return "café";

  }else if (word == "blue"){
    return "azul";

  }else if (word == "grey"){
    return "gris";

  }else if (word == "black"){
    return "negro";

  }else if(word == "red"){
    return "rojo";

  }else if(word == "blonde"){
    return "rubio";

  }else if(word == "bald"){
    return "sin pelo"

  }else{
    return "no registra"
  }
}
