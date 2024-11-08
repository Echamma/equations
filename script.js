const constantThree = 3.31e-4;
let SGT=2
let tempInF =2
const sixty = 60
const calcTempAtSixty = () =>
{
SGT = document.getElementById("SGT").value;
tempInF = document.getElementById("temp").value;
console.log(SGT)
console.log(tempInF)
const answer = -1*(constantThree * (tempInF - sixty))/SGT 
document.getElementById("answer").innerHTML =  answer.toString();
console.log("The button has been pressed" + answer)
}

// document.getElementById("thisIsButton").onclick = calcTempAtSixty();