class BankAccount {
    #balance = 0; // Private field
    _accountNumber; // Protected convention
    
    constructor(accountNumber, initialBalance = 0) {
        this._accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: $${amount}`);
            return true;
        }
        console.log("Insufficient funds");
        return false;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #validateAmount(amount) {
        return amount > 0 && amount < 1000000;
    }
}

console.log("\n=== Private and Protected ===");
let account = new BankAccount("12345", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance: $" + account.getBalance());
// console.log(account.#balance); // Error: Private field
// console.log(account._accountNumber); // Accessible but should be treated as protected
