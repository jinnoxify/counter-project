const addBtn = document.getElementById('add-count');
const lowerBtn = document.getElementById('lower-count');
let span = document.querySelector(".value");

let num = 0;

addBtn.addEventListener("click", function() {
    num++
    span.textContent = num;
    if (num > 0) {
        span.style.color = "green";
    } else if (num = 0) {
        span.style.color = "black";
    }
});

lowerBtn.addEventListener("click", function() {
    num--
    span.textContent = num;
    if (num < 0) {
        span.style.color = "red";
    } else if (num = 0) {
        span.style.color = "black";
    }
});