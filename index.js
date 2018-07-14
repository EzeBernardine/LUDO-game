let placeholder = document.getElementById('placeholder');
var button = document.getElementById('button');
let resume = document.querySelectorAll(".resume")

let sum = [];
button.onclick = function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    placeholder.innerHTML = randomNumber;
    sum.push(randomNumber)
    let lastNumber = (sum.length) - 1;
    // console.log(sum)
    // lastNumber = (sum.length) - 1;
    console.log(`the last number is ` + sum[lastNumber])
    let me = []
    resume.forEach((each) => {  
        me.push(each)
    })
            if (randomNumber === 6) {
                console.log(me)
                me.filter
                me.addEventListener("dblclick", resumeFunc);
                // console.log(me)
                function resumeFunc() {
                    console.log(randomNumber)
                   me.style.backgroundColor = 'pink'
                    console.log('hello')
                }
            }

};

// console.log(sum )









let general = document.querySelectorAll(".general")
let arr = [];
for (let i = 0; i < general.length; i++) {
    general[i].addEventListener('click', function () {
        general[i].className = "green";
        arr.push(general[i]);
        let lent = (arr.length) - 2 
        {arr[lent] != general[i] && (arr[lent].className = "general") } 
    })
}