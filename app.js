let display = document.querySelector(".display");
let btns = document.querySelectorAll(".btn");
let clear = document.querySelector(".clear");
let calculate = document.querySelector(".calculate");

clear.addEventListener("click", ()=> {
    display.value = "";
})


for( let btn of btns ){
    btn.addEventListener("click", ()=> {
        display.value += btn.innerText;
    });
}

calculate.addEventListener("click", ()=> {
    display.value = eval(display.value);
})