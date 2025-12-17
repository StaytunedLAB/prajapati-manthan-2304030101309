console.log("Starting timer...");
setTimeout(() => {
    console.log("This runs after 1 second");
}, 1000);

let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log("Interval tick:", counter);
    if (counter >= 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 500);