let printHTML = document.getElementById("print");
document.getElementById("submit").addEventListener('click',e);
function e(){
    let inputNumber = document.getElementById('number').value
    let container=""
    if(inputNumber>=4&&inputNumber<=20){
        for(let i = 0;i<inputNumber;i++){
            if(i%2==0){
                container+=i 
            }
        }
    }else{
        alert("Đầu bài yêu câu nhập từ 4 đến 20 thuii")
    }
    printHTML.innerHTML=container;
}