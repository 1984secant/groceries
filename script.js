let banana = 0.79;
let apple = 1.25;
let bread = 2.99;
let milk = 3.49;
let eggs = 4.25;


let cartTotal = 0;


function addToCart(item){
    cartTotal += item;
    return cartTotal;
}

function removeFromCart(item){
    cartTotal -= item;
    return cartTotal;
}

addToCart(apple);
addToCart(milk);
console.log(cartTotal);
removeFromCart(apple);
console.log(cartTotal);

