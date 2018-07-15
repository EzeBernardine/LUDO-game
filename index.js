
var button = document.getElementById('button');

let redClassName = 1
let yellowClassName = 1
let greenClassName = 1
let blueClassName = 1
   function handleRedTracker(){
    redClassName++
    document.getElementsByClassName("red-tracker")[0].innerHTML = redClassName ;
   }
   function handleYellowTracker(){
    yellowClassName++
    document.getElementsByClassName("yellow-tracker")[0].innerHTML = yellowClassName ;
   }
   function handleBlueTracker(){
    blueClassName++
    document.getElementsByClassName("blue-tracker")[0].innerHTML = blueClassName ;
   }
   function handleGreenTracker(){
    greenClassName++
    document.getElementsByClassName("green-tracker")[0].innerHTML = greenClassName ;
   }

let arrayFromAllRolledDice = [];
let allRedDiceArr = [];
let allYellowDiceArr = [];
let allGreenDiceArr = [];
let allBlueDiceArr = [];
button.onclick = function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    placeholder.innerHTML = randomNumber;
    arrayFromAllRolledDice.push(randomNumber)
        
        if (randomNumber === 6 ) {
            let allRedDiceDiv = document.querySelectorAll(".red")
            allRedDiceDiv.forEach((each) => allRedDiceArr.push(each))
            let red = document.getElementsByClassName(`red${redClassName}`)[0]
            red.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                    e.target.parentElement.removeChild(red)
                    handleRedTracker()
                    if(allRedDiceArr.length === 1){
                      let unlockRedPara =  document.getElementsByClassName("unlockRed")[0];
                      unlockRedPara.parentElement.removeChild(unlockRedPara);
                      let redTracker =  document.querySelector(".red-tracker");
                      redTracker.parentElement.removeChild(redTracker)
                    }
                }
                allRedDiceArr = []
            } )
            let allYellowDiceDiv = document.querySelectorAll(".yellow")
            allYellowDiceDiv.forEach((each) => allYellowDiceArr.push(each))
            let  yellow = document.getElementsByClassName(`yellow${yellowClassName}`)[0]
            yellow.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                     e.target.parentElement.removeChild(yellow)
                     handleYellowTracker()
                     if(allYellowDiceArr.length === 1){
                        let unlockYellowPara =  document.getElementsByClassName("unlockYellow")[0];
                        unlockYellowPara.parentElement.removeChild(unlockYellowPara);
                        let yellowTracker =  document.querySelector(".yellow-tracker");
                        yellowTracker.parentElement.removeChild(yellowTracker)
                      }
                }
                allYellowDiceArr = []
            } )
            let allGreenDiceDiv = document.querySelectorAll(".green")
            allGreenDiceDiv.forEach((each) => allGreenDiceArr.push(each))
            let green = document.getElementsByClassName(`green${greenClassName}`)[0]
            green.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6){
                    e.target.parentElement.removeChild(green)
                    handleGreenTracker()
                    if(allGreenDiceArr.length === 1){
                        let unlockGreenPara =  document.getElementsByClassName("unlockGreen")[0];
                        unlockGreenPara.parentElement.removeChild(unlockGreenPara);
                        let greenTracker =  document.querySelector(".green-tracker");
                        greenTracker.parentElement.removeChild(greenTracker)
                      }
                }
                allGreenDiceArr = [];
            } )
            let allBlueDiceDiv = document.querySelectorAll(".blue")
            allBlueDiceDiv.forEach((each) => allBlueDiceArr.push(each))
            let blue = document.getElementsByClassName(`blue${blueClassName}`)[0]
            blue.addEventListener("click",function(e){
                if(arrayFromAllRolledDice[arrayFromAllRolledDice.length-1] === 6 ){
                    e.target.parentElement.removeChild(blue)
                    handleBlueTracker();
                    if(allBlueDiceArr.length === 1){
                        let unlockBluePara =  document.getElementsByClassName("unlockBlue")[0];
                        unlockBluePara.parentElement.removeChild(unlockBluePara);
                        let blueTracker =  document.querySelector(".blue-tracker");
                        blueTracker.parentElement.removeChild(blueTracker)
                      }
                }
                allBlueDiceArr = [];
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