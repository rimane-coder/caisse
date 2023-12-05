class CheckoutModel{
    
    constructor (checkout, numberOfBill, amount) {
            this.checkout = checkout;
            this.nbbillets = numberOfBill;
            this.amount = amount;
            this.initialAmount = amount;
            this.reste = amount;
          }
   
  
    calculateRemaining(amount, checkout, index, numberOfBill) {
     
          numberOfBill[index] = Math.floor(amount / checkout[index]);
          this.amount = amount % checkout[index];
          return this.amount;
      
        }
  
  
    decrementer(index, numberOfBill) {
      let newNumberofBill = numberOfBill;
      if (newNumberofBill[index] > 0) {newNumberofBill[index] = newNumberofBill[index] -1;
      }
      return newNumberofBill;
    }
    
    calculateAmount(checkout, numberOfBill, amount ,index) {
      for (let i = index; i < checkout.length; i++) {
         amount= this.calculateRemaining(amount,checkout, i, numberOfBill);
      
      }
      return amount;
    }
  
    
  }
  
  export default CheckoutModel
  