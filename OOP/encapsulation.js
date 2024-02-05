console.log('OOP')

//Encapsulation
//Class

class BankAccount {
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if (amount > this.balance) {
            this.balance -= amount;
         } else {
            console.log("Insufficient Funds!");
        }
    }

    getAccountInfo(){
    return `Account Number: ${this.accountNumber}, Balance: ${this.balance} `;
    }
}

const myAccount = new BankAccount("1233456789", 1000);  //this is the object. 
const regalAccount = new BankAccount("987654321",20000); //another example..
myAccount.deposit(5000);
console.log(myAccount.getAccountInfo());  

myAccount.withdraw(100);

console.log(myAccount.getAccountInfo());   
//console.log(regalAccount.getAccountInfo());


