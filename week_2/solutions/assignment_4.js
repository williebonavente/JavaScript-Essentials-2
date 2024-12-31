class BankAccount {
    #accountHolderName;
    #accountNumber;
    #balance;

    constructor(accountHolderName, accountNumber) {
        this.#accountHolderName = accountHolderName;
        this.#accountNumber = accountNumber;
        this.#balance = 0;
    }

    // Deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} deposited successfully.`);
        } else {
            console.log('Deposit amount must be greater than zero.');
        }
    }

    // Withdraw money from the account
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${amount} withdrawn successfully.`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    // Get the current balance
    getBalance() {
        return this.#balance;
    }
}

// Transaction class
class Transaction {
    constructor(type, amount, date) {
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
}

// Usage
const account = new BankAccount('Alice', '12345678');
account.deposit(500);
account.withdraw(200);
console.log(`Current Balance: ${account.getBalance()}`);
