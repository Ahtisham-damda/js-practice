class BankAccount{
    accountHolder;
    accountNumber;
    Balance;




    constructor(name , accountNum, openingBalance){
        this.accountHolder = name;
        this.accountNumber = accountNum;
        this.Balance = openingBalance;
    }

    printAccountDetail(){
        console.log(`Account Holder's Name : ${this.accountHolder}`);
    console.log(`Account Number : ${this.accountNumber}`);
    console.log(`Account Balance: ${this.Balance}`);
    }

    deposit(amount){
        console.log(`Depositing ${amount} To Your Account`);
        this.Balance = this.Balance+amount;
        
    }

    withdraw(amount){
        console.log(`Trying to withdrew ${amount} from Your Account`);
        if(amount > this.Balance){
            console.log(`Insufficient Balance in the Account`);
            
        }else{
            console.log(`Withdrew ${amount} from your account`);
            this.Balance = this.Balance-amount;
        }
        
    }

    
}


let account1 = new BankAccount("Aqdas",900301,20000);
let account2 = new BankAccount("Fayaz",900302,50000);

// account1.printAccountDetail();
// account1.deposit(5000);
// account1.printAccountDetail();

account2.withdraw(50000);
account2.printAccountDetail();


