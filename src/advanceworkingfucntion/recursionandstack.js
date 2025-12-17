function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

function countdown(num) {
    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    countdown(num - 1);
}
console.log("Countdown from 3:");
countdown(3);