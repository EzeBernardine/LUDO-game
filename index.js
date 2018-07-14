var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;

    let sum = []
    let resume = document.querySelectorAll(".resume")
    sum.push(number)
    for (let i = 0; i < resume.length; i++) {
        resume[i].addEventListener("dblclick", resumeFunc);
        function resumeFunc() {
            if (number === 6) {
                resume[i].style.backgroundColor = 'pink'
            }
            console.log(sum)
        }
    }
}

var button = document.getElementById('button');
button.onclick = function () {
    var result = dice.roll();
    printNumber(result);
};








let general = document.querySelectorAll(".general")
let arr = [];
let lent;
for (let i = 0; i < general.length; i++) {
    general[i].addEventListener('click', func)

    function func() {
        general[i].className = "green";
        arr.push(general[i]);
        lent = (arr.length) - 2
        arr[lent].className = "general"
        console.log(arr[lent])
        console.log(general[i])
    }
}