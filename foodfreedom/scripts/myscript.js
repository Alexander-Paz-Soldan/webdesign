/*
  JavaScript indeling op pagina, als de codebase im de scripts
  te groot is dan zullen de scripts in aparte .js bestanden worden
  ondergebracht.
*/


// 1. algemeen script
function goto(){

}

// end algemeen script


// 2. recept script
let myWaarden = [2,1,1,70,500,1,1,1];
function berekenHoeveelheid(){

  let slider = document.getElementById('myRange');
  let multiplier = slider.value;

  let hoeveelheden = document.getElementsByClassName("hoeveelheid");

  for(var i = 0; i < hoeveelheden.length; i++){

    let new_value = multiplier * myWaarden[i];
    hoeveelheden[i].textContent = new_value;
  }

   let lepels = document.getElementsByClassName('lepel');
   let textValue = "lepel";
   if(multiplier > 1){
     textValue = "lepels";
   } else{
     textValue = "lepel";
   }
   for(var i = 0; i < lepels.length; i++){
     lepels[i].textContent = textValue;
   }
}
// end recept script


// 3. inschrijfscript

// end inschrijf script
