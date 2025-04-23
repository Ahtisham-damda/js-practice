class BankAccount{
    accountHolder;
    Balance;




    constructor(name , openingBalance){
        this.accountHolder = name;
        this.Balance = openingBalance;
    }

    printAccountDetail(){
        console.log(`Account Holder's Name : ${this.accountHolder}`);
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
 
export default BankAccount;
