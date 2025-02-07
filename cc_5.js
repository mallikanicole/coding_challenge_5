//Task 1-Object Properties
let customer={name:"John Doe",age:35,email:"john.doe@gmail.com"};//declare customer details
for(let x in customer){
    console.log(`${x}:${customer[x]}`);
}//list each property separately


//Task 2-Object Methods
let order={orderId: 12345, totalAmount: 150, status: "Processing",
    displayOrder: function(){
    console.log(`OrderID:${this.orderId} Total Amount:${this.totalAmount} Status:${this.status}`)
    }   
};
displayOrder();
