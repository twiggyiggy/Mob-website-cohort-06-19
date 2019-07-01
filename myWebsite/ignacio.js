'use strict'
console.log('dupa');

function main() {
  var experimentsHeading = document.querySelector('.experiments-heading');
  var textToHide = document.querySelector('.text-to-hide');

  //experimentsHeading.onclick = function(){ ////////MAS CORTO
    //textToHide.classList.toggle('hidden')
  //}
  experimentsHeading.addEventListener('click', function(){
    textToHide.classList.toggle('hidden')
  })
}

window.addEventListener('load', main);