let user = {
    name: "John",
    sayHi() {
        console.log("Hello, " + this.name);
    }
};

setTimeout(user.sayHi.bind(user), 1000);
