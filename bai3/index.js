document.getElementById("submit").addEventListener('click',treatment);
let printHTML = document.getElementById("print")
function treatment(){
   let inputNumber =  document.getElementById('number').value
   let print = ``
   let container ="";
   let one ="1";
   for(let i =0 ;i<inputNumber;i++){
       for(let j = 0 ;j<=i;j++){
         container +=one;
         break
       }
       print +=`${container}<br>`

   }
   printHTML.innerHTML =print
    console.log(inputNumber);
}