
let input = document.querySelector("name");
let display = document.querySelector("display-text");

input.addEventListener("input", function () {
   const name = input.value;
   
   display.textContent = name;
   
   
   
   console.log(simpleMath(2, 3));
})
// missing function?

// you should see 5 in the output of your console