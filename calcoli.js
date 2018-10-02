/*Calcoli per la app sul BMI*/
function calcola(){
//identificare i dati del form
var peso=document.forms.bmi.peso.value;
var altezza=document.forms.bmi.altezza.value;
var sesso=document.forms.bmi.sesso.value;
//verifico se l'utente è m o f
if(sesso='m'){
   //applico la formula bmi per m
   var res=;
   }
   else{
   //applico la formula bmi per f 
    var res=;
  }
  var risultato=getElementById('risultato');
  risultato.innerHTML="BMI="+"res;
}
function annulla(){

}
