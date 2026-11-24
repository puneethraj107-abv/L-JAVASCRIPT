let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {//to pass each element of the array to val
    console.log(val);
});

let cities = ["bengaluru", "mangaluru"];
cities.forEach((cit, idx, arr) => {//to pass each element of the array to val
    console.log(cit.toUpperCase(), idx, arr);
});

//Q. filter out students who scored more than 90
let students = [12, 65, 76, 90, 99, 92];

let nintyplusmarks = students.filter((val) => {
    return val >= 90;
})

console.log(nintyplusmarks);

//Q. take a number as an input and create an array from 1 to number
//use the reduce method to calculate the sum of all the numbers in the array
//use the reduce method to calculate all the product of all the numbers
let number = prompt("enter the number");
let arry = [];
for (let i = 1; i <= number; i++) {
    arry[i - 1] = i;
}

console.log(arry);

let sum = arry.reduce((res, cur) => {
    return res + cur;
})

console.log(sum);

let product = arry.reduce((res, cur) => {
    return res * cur;
})

console.log(product);