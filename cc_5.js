//Task 1-Object Properties

let customer={name:"John Doe",age:35,email:"john.doe@gmail.com"};//declare customer details
for(let x in customer){
    console.log(`${x}:${customer[x]}`);
}//list each property separately


//Task 2-Object Methods

let order= { orderId: 12345, totalAmount: 150, status: "Processing",//declare order details
    displayOrder() {//add method in the object of order
        console.log(`OrderID:${this.orderId}`);
        console.log(`Total Amount:${this.totalAmount}`);
        console.log(`Status:${this.status}`);
    }
};

order.displayOrder();//calling method and logging details


//Task 3-Array Manipulation(push,pop,shift,unshift)

let cartItems=["mango", "apple", "banana"];//declare products in cart
console.log(`Cart Items:${cartItems}`)

cartItems.push("peach");//add product to end of list
console.log(`Cart Items Added Product to End:${cartItems}`)

cartItems.pop();//remove product from end of list
console.log(`Cart Items Remove Product from End:${cartItems}`)

cartItems.unshift("strawberry");//add product to beginning of list
console.log(`Cart Items Add Product to Beginning:${cartItems}`)

cartItems.shift();//remove product from beginnng of list
console.log(`Cart Items Remove Product from Beginning:${cartItems}`)


//Task 4-Map Method

let prices=[100,200,300];//declare prices
console.log(`Prices:${prices}`)

let discountedPrices=prices.map(price=>price*.9);//discount prices by 10%
console.log(`Discounted Prices:${discountedPrices}`)

//Task5-Filter Method

let inventory=[5,0,12,8,0];//declare inventory
console.log(`Inventory:${inventory}`)

let updatedInventory=inventory.filter(inventory=>inventory>1);//filter out products with zero stock
console.log(`Updated Inventory:${updatedInventory}`)

//Task 6-Reduce Method

let sales=[500,300,200,400];//declare sales
console.log(`Sales:${sales}`)

let totalRevenue=sales.reduce((sum,expense)=>sum+expense);//calculate sum of sales
console.log(`Total Revenue:${totalRevenue}`)


//Task 7-Find Method

let customers = ["Alice", "Bob", "Charlie", "David"];//declare customers
console.log(`Customers:${customers}`)

let locate=customers.find(customer=>customer==="Charlie");//locate Charlie
console.log(`Locate:${locate}`)


//Task 8-Function Declaration

function calculateTax(amount){
    return amount *.08;
};//declare tax function

console.log(`Calculate Tax:$${calculateTax(1000)}`)


//Task 9-Function Expression

let applyDiscount=function
discount(price,discount){
    return price-(price*.1);
};//create discount function of 10%

console.log(`Discount Applied:$${applyDiscount(100)}`)

//Task 10-Arrow Function

function calculatePoints(purchaseAmount){
    return(purchaseAmount/10);
};//create function to calculate points

console.log(`Points Earned:${calculatePoints(100)}`)