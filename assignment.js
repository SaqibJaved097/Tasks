class Bank{
    constructor(name){
        this.name=name;
        this.accountHolders=[];
    }
    addAccountHolder(accountHolder){
        this.accountHolders.push(accountHolder);
    }
    removeAccountHolder(accountHolder){
        const index = this.accountHolders.indexOf(accountHolder);
        if(index !==-1){
            this.accountHolders.splice(index,1)
        }

    }
    transferMoney(sender,receiver,amount){
        const senderAccount = this.accountHolders.find(accountHolder => accountHolder.name === sender);
        const receiverAccount = this.accountHolders.find(accountHolder => accountHolder.name === receiver);

        if( !senderAccount || !receiverAccount){
            throw new Error("Sender and Receiver account does not exist");
        }
        if(senderAccount.balance < amount){
            throw new Error("Insufficient balance to transfer");
        }
        senderAccount.balance -= amount;
        receiverAccount.balance += amount;
    }
}
class AccountHolder{
    constructor (name,balance){
        this.name=name;
        this.balance=balance;
    }
}

const bank = new Bank("My Bank");
const ahmad = new AccountHolder("ahmad", 1000);
const ali = new AccountHolder("ali", 500);

bank.addAccountHolder(ahmad);
bank.addAccountHolder(ali);

bank.transferMoney("ahmad", "ali", 500);

console.log(ahmad.balance); 
console.log(ali.balance); 

bank.removeAccountHolder(ahmad);

console.log(bank.accountHolders);
