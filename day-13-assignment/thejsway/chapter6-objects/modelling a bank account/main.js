const account = {
  name: "Alex",                                         
  balance: 0,                                              
  credit() {                                               
    return `${this.name} ${this.balance + 170}`;           
  },                                                       
  describe() {                                             
    return `${this.name} ${this.balance}`;                 
  },                                                       
};                                                         
                                                           
console.log(`owner: ${account.name}, ${account.balance}`);
console.log(`owner: ${account.name}, ${account.balance}`);
                                                           