class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Invalid deposit amount';
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Invalid withdrawal amount';
      }
    }
  
    checkBalance() {
      return `Account balance for ${this.accountHolder}: $${this.balance}`;
    }
  }
  
  
  const account = new BankAccount('123456789', 'Alice', 1000);
  
  console.log(account.checkBalance()); 
  
  console.log(account.deposit(500)); 
  console.log(account.checkBalance()); 
  
  console.log(account.withdraw(200)); 
  console.log(account.checkBalance());
  