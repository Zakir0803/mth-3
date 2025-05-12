// Задача 1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45")); 

// Задача 2
setInterval(() => {
    console.log("Прошла секунда");
}, 1000);

// Задача 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
};

count();

// Задача 4
const square = document.getElementById("square");
const button = document.getElementById("toggleColor");

button.addEventListener("click", () => {
    square.classList.toggle("colored");
});
