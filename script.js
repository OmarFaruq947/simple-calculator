//Delete
function DeleteMe(){
document.getElementById('myResult').value = ""
}

//calculator
function Calculator(newValue){
document.getElementById('myResult').value += newValue
}

//answer
function Answer(){
var a= document.getElementById("myResult").value;
var b = eval(a);

document.getElementById("myResult").value=b;


}