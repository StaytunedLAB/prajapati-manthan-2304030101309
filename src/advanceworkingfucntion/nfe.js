let sayHi = function func(who) {
    if (who) {
        console.log("Hello, " + who);
    } else {
        func("Guest");
    }
};
sayHi("Alice");
sayHi();