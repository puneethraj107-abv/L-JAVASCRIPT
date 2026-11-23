//welcome to hell
function myFunction() {
    console.log("welcome to my function");
    console.log("welcome to hell");
}

myFunction();

//arrow function
const arrowSum = (x, y) => {
    console.log(x + y);
}

const arrowMul = (x, y) => {
    return x * y;
}

//practise questions
let vowels = ["a", "e", "i", "o", "u"];
let str = "puneeth";
let count = 0;
let cou = 0;
function findingVowels(string) {
    for (let s of string) {
        if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
            count++
        }
    }
    console.log(count);
}

const findingVow = (str) => {
    for (let s of strṅ) {
        if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
            cou++
        }
    }
    console.log(cou);
}
findingVowels(str);
findingVow(str);