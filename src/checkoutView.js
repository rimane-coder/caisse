import readlineSync from 'readline-sync';
class CheckoutView {
 
    constructor (checkout, nuberOfBill, amount) {
            this.checkout = checkout;
            this.numberOfBill = nuberOfBill;
            this.amount = amount;
            this.amoutInit = amount;
            this.rest = amount;
        
   
    }

    enterAmount() {
            while (true) {
                this.amount = readlineSync.question("Quel est le montant à retirer ? ");
                    if (this.amount>0) {
                        break;
                    }
                    console.log("Le montant doit être un nombre positif");
            }
        return this.amount;
    }
    isNull(nbBillet,caise,index) {
            if(nbBillet[index]*caise[index]==0)
     return true;
    }

    isOne(nbBillet,caise,index) {
             if(nbBillet[index]*caise[index]==caise[index])
     return true;
    }

    numberElementNull(array){
      
        this.ElementNull=0;
        for(let i=0;i<array.length;i++){
            if(array[i]==0){ this.ElementNull++;}
        }
            
     return this.ElementNull;
    } 

    generateSolutionString(numberOfBills, cash, index) {
        let string = cash[index];
    
        
        for (let i = 1; i < numberOfBills[index]; i++) {
          string += "+" + cash[index];
        }
        
     return string;
    }
   

        
   generateBillString(numberOfBills, cash, index){

        this.ElementNull = 0;
         this.ElementNull=this.numberElementNull(numberOfBills);
        let string = "";
            if(this.ElementNull == 2){
                if(numberOfBills[index]<=3){
            string += this.generateSolutionString(numberOfBills, cash, index); 
            }else if(numberOfBills[index]>3){
                string += cash[index] + "*" + numberOfBills[index]; 
            }
            

            } else 
                  if(this.isOne(numberOfBills, cash, index)){
                      string += cash[index];
      
                  } 
                  else if(!this.isNull(numberOfBills, cash, index) && !this.isOne(numberOfBills, cash, index)) {
                      string += cash[index] + "*" + numberOfBills[index]; }
        return string;
    }



    displayAmount(amount) { 
        console.log("Montant à rendre : "+amount +" $");
    }



    
    displayResult(numberOfBills, cash, remaining) {
        let numberElementNull=this.numberElementNull(numberOfBills); 
        let billSolution = "Optimal solution: ";
        let string = "";
        if (remaining > 0) {
          billSolution += "Impossible";
        } 
        else if (numberElementNull == 2 ) {
            for (let i = 0; i < numberOfBills.length; i++) {
                if (!this.isNull(numberOfBills,cash,i)) 
                    string = this.generateBillString(numberOfBills, cash, i);
                
            }
        
            
        }
            else {
              for (let i = 0; i < numberOfBills.length; i++) {
                 
                      if (i === 0 && numberElementNull!=2 &&  !this.isNull(numberOfBills,cash,i)  && !this.isOne(numberOfBills, cash, i)) {
                        
                      string += this.generateBillString(numberOfBills, cash, i);
              
                     }else if ( this.numberElementNull != 2) {
                        if(i==0){
                        string +=this.generateBillString(numberOfBills, cash, i);
                          }else if(numberOfBills[i-1]!=0){
                                    string += " + " + this.generateBillString(numberOfBills, cash, i);
                                }
                               else if(numberOfBills[i-1]==0){
                                        string += this.generateBillString(numberOfBills, cash, i);
                                    }
                                    
                                }
                                
                    
                    }
                     
                }
        billSolution += string;
        console.log(billSolution);
      
    }

}export default CheckoutView

