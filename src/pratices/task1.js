/* Q1. Simple & Compound Interest*/
let p = 1000;
let r = 5;
let t = 2;

let SI = (p * r * t) / 100;
let CI = p * (1 + r/100) ** t - p;

console.log("Q1. Simple and Compound Interest");
console.log("Simple Interest = ", SI);
console.log("Compound Interest = ", CI);
console.log("------------------------------------");


/* Q2. Fibonacci Series*/
let n = 10;
let a = 0, b = 1;

console.log("Q2. Fibonacci Series");
console.log(a);
console.log(b);

for(let i=2; i<n; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}
console.log("------------------------------------");



/* Q3. Grade using Switch*/

let marks = 85;
let grade;

switch(true){
    case marks >= 90: grade = "A"; break;
    case marks >= 80: grade = "B"; break;
    case marks >= 70: grade = "C"; break;
    case marks >= 60: grade = "D"; break;
    default: grade = "Fail";
}

console.log("Q3. Grade =", grade);
console.log("------------------------------------");



/* Q4. Check Leap Year*/
let year = 2024;

if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("Q4. Leap Year");
}else{
    console.log("Q4. Not a Leap Year");
}
console.log("------------------------------------");


/* Q5. Palindrome String*/
let str = "madam";
let rev = str.split("").reverse().join("");

if(str === rev){
    console.log("Q5. Palindrome String");
}else{
    console.log("Q5. Not a Palindrome");
}
console.log("------------------------------------");