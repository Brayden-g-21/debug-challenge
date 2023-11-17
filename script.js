
let input = document.querySelector("#name");
let display = document.querySelector(".display-text");

input.addEventListener("input", function() {
   const name = input.value;
   
   display.textContent = name;
});

function simpleMath(x, y) {
    console.log(x + y)
   };

   simpleMath(2, 3);