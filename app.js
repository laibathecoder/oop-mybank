#! /usr/bin/env node
// OOP MY BANK
class BankAccount {
    accountBalance;
    constructor(accountBalance) {
        this.accountBalance = accountBalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Your credit is successfully transferred to the new account.");
        }
        else {
            console.log("Your credit was unsuccessful in transferring to the new account.");
        }
    }
    debit(amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log("Your debit is successfully transferred to the new accountand your remaning balance is: " + this.accountBalance);
        }
        else {
            console.log("Your debit was unsuccessful in transferring to the new account.");
        }
    }
}
class Customer {
    bankcustomer;
    age;
    gender;
    mobileNumber;
    bankaccount;
    constructor(bankcustomer, age, gender, mobileNumber, bankaccount) {
        this.bankcustomer = bankcustomer;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.bankaccount = bankaccount;
    }
    visible() {
        console.log("Name: " + this.bankcustomer.firstname + " " + this.bankcustomer.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile Number: " + this.mobileNumber);
        console.log("Amount in Bank: " + this.bankaccount.accountBalance);
        console.log();
    }
}
const A1 = new BankAccount(100000);
const C1 = new Customer({ firstname: "Zoya", lastname: "Naz" }, 20, "Female", 348556879, A1);
C1.visible();
C1.bankaccount.debit(20000);
console.log();
const A2 = new BankAccount(30000);
const C2 = new Customer({ firstname: "Huzaifa", lastname: "Ali" }, 25, "Male", 16482334, A2);
C2.visible();
C2.bankaccount.credit(20000);
console.log();
export {};
