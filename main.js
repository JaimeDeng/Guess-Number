
let randomInt = Math.floor(Math.random() * (99 - 2 + 1)) + 2;
randomInt = 5;
let toElement = document.getElementById("to");
let minElement = document.getElementById("minNum");
let minText = minElement.textContent;
let min = parseInt(minText);
let maxElement = document.getElementById("maxNum");
let maxText = maxElement.textContent;
let max = parseInt(maxText);
let title = document.getElementById("title");
let frameElement = document.getElementById("frame");

let btn = document.getElementById("btn");
btn.addEventListener("click" , () => {
    let inputElement = document.getElementById("input");
    let inputStr = inputElement.value;
    let input = parseInt(inputStr);
    if(input >= max || input <= min){
        window.alert("請輸入範圍內的數字!")
    }else{
        if(input < randomInt){
            min = input;
            minElement.innerHTML = min;
            title.innerHTML = "太小囉";
        }
        if(input > randomInt){
            max = input;
            maxElement.innerHTML = max;
            title.innerHTML = "太大囉";
        }
        if(input == randomInt){
            title.innerHTML = "猜對了!";
            title.style.fontSize = "70px";
            title.style.color = ""
            title.style.fontWeight = "700";
            minElement.style.display = "none";
            maxElement.style.display = "none";
            toElement.style.display = "none";
            inputElement.style.display = "none";
            btn.style.border = "2px solid gray";

            frameElement.style.backgroundImage = "linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red, violet)";
            frameElement.style.backgroundSize = "1000% 100%";
            frameElement.style.animation = "rainbow-wave-animation 5s linear infinite";

            btn.innerHTML = "再來一局";
            btn.addEventListener("click" , () => {
                location.reload();
            });

        }
    }
})