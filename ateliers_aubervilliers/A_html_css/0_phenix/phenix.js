let tony = document.getElementById("tony");
let georges = document.getElementById("georges");
let slim = document.getElementById("slim");

let count = 0;
georges.addEventListener("click", function () {
  // @ts-ignore
  tony.style.color = "green";
  count = count + 1;
  slim.innerHTML = count;
});
