let banana = 0.79;
let apple = 1.25;
let bread = 2.99;
let milk = 3.49;
let eggs = 4.25;

let cartTotal = 0;


function addToCart(item){
    cartTotal += item;
    return cartTotal.toFixed(2);
}

function removeFromCart(item){
    cartTotal -= item;
    return cartTotal.toFixed(2);
}

function discount(item, xPercent){
    item -= item*xPercent;
    return item;
}
function calcTotal(){
    console.log(cartTotal.toFixed(2));
}


// addToCart(apple);
// addToCart(milk);
// console.log(cartTotal);
// removeFromCart(apple);
// console.log(cartTotal);

// discount(milk, .1);
// console.log(cartTotal.toFixed(2))
let newMilk = discount(milk, .1);

addToCart(banana);
addToCart(banana);
addToCart(banana);
addToCart(banana);
addToCart(banana);
addToCart(apple);
addToCart(apple);
addToCart(bread);
addToCart(eggs);
addToCart(newMilk);
removeFromCart(banana);
removeFromCart(banana);
calcTotal();