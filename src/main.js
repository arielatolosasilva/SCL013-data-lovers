import { example } from './data.js';
import data from './data/potter/potter.js';

console.log(example, data);

function menuDesplegable() {
    var x = document.getElementById("myMenú");
    if (x.className === "menú") {
      x.className += " responsive";
    } else {
      x.className = "menú";
    }
  }
