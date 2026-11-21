//arrays in js
let marks = [96, 56, 54, 73, 26];
let cities = ["bengaluru", "mangaluru", "mandya"];

//writing a loop to print all arrays
//for loop
for (idx = 0; idx < marks.length; idx++) { //{ idx < marks.length }
    console.log(marks[idx]);
}

//for of loop
for (let m of marks) {
    console.log(m);
}

//methods in for loop
for (let city of cities) {
    console.log(city.toUpperCase());
}

//practise questions - to find the average of marks stored in array
let students_marks = [23, 43, 64, 75, 45];

let sum = 0;

for (let mar of students_marks) {
    sum += mar;
}

let average = sum / students_marks.length;
console.log(`the Average of students marks is ${average}`);

//practise questions - to apply 10% of on all value stored in array 
let five_items = [100, 343, 54, 434, 539];

for (let i = 0; i < five_items.length; i++) {
    let offer_value = five_items[i] / 10;
    five_items[i] -= offer_value;
}

console.log(five_items);