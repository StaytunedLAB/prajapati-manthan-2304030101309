if (!String.prototype.trimStart) {
    String.prototype.trimStart = function() {
        return this.replace(/^\s+/, '');
    };
}

let text = "   Hello";
console.log("Trimmed:", text.trimStart());