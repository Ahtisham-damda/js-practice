import BankAccount from "./Account-module.mjs";
  
const account1 = new BankAccount("Ahtisham",5000);

account1.printAccountDetail();
account1.deposit(8000);
account1.printAccountDetail();
account1.withdraw(10000);
account1.printAccountDetail();
