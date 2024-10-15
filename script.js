function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let  display = document.getElementById('display');
        display.value = eval(display.value);
        console.log(display.value);

    }
function colorChange(){
let body=document.getElementsByTagName("body")[0]
let mod=document.querySelector(".mod")
body.classList.toggle("dark")
mod.style.color=`${"red"}`

}
