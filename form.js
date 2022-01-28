
// console log data form
let userName = document.querySelector("#floatingInput");
let date = document.querySelector("#pickeddate");
let judet = document.querySelector("#judetul");
let oras = document.querySelector("#oras");
let str1 = document.querySelector("#strada");
let str2 = document.querySelector("#str > input");
let nr = document.querySelector("#nr > input");

function myFunction(){
    console.log("Name: " + userName.value);
    console.log("DoB: " + date.value);
    console.log("Judetul: " + judet.value);
    console.log("Orasul: " + oras.value);
    console.log("Adresa: " + str1.value, str2.value, nr.value);
}
// prevent default refresh page on submit
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

