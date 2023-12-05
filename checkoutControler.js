import CheckoutModel from "./src/checkoutModel.js";    
import CheckoutView from "./src/checkoutView.js";


let Checkout = [10, 5, 2];
let numberOfBills = [0, 0, 0];

let amount = 0;
let remaining = 0;

const checkoutModelInstance = new CheckoutModel(Checkout, numberOfBills, amount);
const checkoutViewInstance = new CheckoutView(Checkout, numberOfBills, amount);

while(true) {
    amount = checkoutViewInstance.enterAmount();
    const initialAmount = amount;
    amount = checkoutModelInstance.calculateAmount(Checkout, numberOfBills, amount ,0);
    remaining = amount;  
    if (remaining > 0) { 
        let k = 0;
        numberOfBills = checkoutModelInstance.decrementer(k, numberOfBills);
        amount = initialAmount - numberOfBills[k] * Checkout[k];
        amount = checkoutModelInstance.calculateAmount(Checkout, numberOfBills, amount, k + 1);
        remaining = amount;
        if(remaining > 0) {
            k = 1;
            numberOfBills = checkoutModelInstance.decrementer(k, numberOfBills);
            amount = initialAmount - numberOfBills[k-1] * Checkout[k-1] - numberOfBills[k] * Checkout[k];
            amount = checkoutModelInstance.calculateRemaining(amount, Checkout, k+1, numberOfBills);
        } 
                   
    }
  checkoutViewInstance.displayAmount(initialAmount);
   checkoutViewInstance.displayResult(numberOfBills, Checkout, amount);
}

    


