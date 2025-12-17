function varExample() {
    var oldVar = "Old style";
    if (true) {
        var oldVar = "Changed"; // Same variable!
    }
    console.log("var value:", oldVar);
}
varExample();