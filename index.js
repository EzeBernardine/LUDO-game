
var button = document.getElementById('button');

let redClassName = 4
let yellowClassName = 4
let greenClassName = 4
let blueClassName = 4
   function handleRedTracker(){
    redClassName--
    document.getElementsByClassName("red-tracker")[0].innerHTML = redClassName ;
   }
   function handleYellowTracker(){
    yellowClassName--
    document.getElementsByClassName("yellow-tracker")[0].innerHTML = yellowClassName ;
   }
   function handleBlueTracker(){
    blueClassName--
    document.getElementsByClassName("blue-tracker")[0].innerHTML = blueClassName ;
   }
   function handleGreenTracker(){
    greenClassName--
    document.getElementsByClassName("green-tracker")[0].innerHTML = greenClassName ;
   }
    

let arrayFromAllRolledDice = [];

button.onclick = function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    placeholder.innerHTML = randomNumber;
    arrayFromAllRolledDice.push(randomNumber)
         if (randomNumber === 6 ) {
            let red = document.getElementsByClassName(`red${redClassName}`)[0]
            red.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                    e.target.parentElement.removeChild(red)
                    handleRedTracker()
                }
            } )
            let  yellow = document.getElementsByClassName(`yellow${yellowClassName}`)[0]
            yellow.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                     e.target.parentElement.removeChild(yellow)
                     handleYellowTracker()
                }
            } )
            let green = document.getElementsByClassName(`green${greenClassName}`)[0]
            green.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                    e.target.parentElement.removeChild(green)
                    handleGreenTracker()
                }
            } )
            let blue = document.getElementsByClassName(`blue${blueClassName}`)[0]
            blue.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6 ){
                    e.target.parentElement.removeChild(blue)
                    handleBlueTracker()
                }
            } )
         }
};





// console.log(arrayFromAllRolledDice)









let general = document.querySelectorAll(".general")
let arr = [];
for (let i = 0; i < general.length; i++) {
    general[i].addEventListener('click', function () {
        general[i].className = "green";
        arr.push(general[i]);
        let lent = (arr.length) - 2 
        {arr[lent] != general[i] && (arr[lent].className = "general")  }
      
    })
}