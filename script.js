function pizzaOven(str1, str2, str3, str4) {
    var pizza = {}
    pizza.crustType = str1;
    pizza.sauceType = str2;
    pizza.cheeses = str3;
    pizza.toppings = str4;
    return pizza;
}

var za = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
console.log(za)

var za2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(za2)

var za3 = pizzaOven("thin crust", "bbq", "mozzy", "pepperoni")
console.log(za3)

var za4 = pizzaOven("stuffed crust", "red sauce", "cream", "jalapenos")
console.log(za4)


let crust = ["deep dish", "hand tossed", "thin crust", "stuffed crust"]
let sauce = ["traditional", "marinara", "bbq", "red sauce"]
let cheese = [["mozzarella"], ["mozzarella", "feta"], "mozzy", "cream"]
let top = [["pepperoni","sausage"],["mushrooms","olives","onions"], "pepperoni","jalapenos"]

function randZa() {
    let newZa = {};
    newZa.crust = crust[Math.floor(Math.random()*crust.length)];
    newZa.sauce = sauce[Math.floor(Math.random()*sauce.length)];
    newZa.cheese = cheese[Math.floor(Math.random()*cheese.length)];
    newZa.top = top[Math.floor(Math.random()*top.length)];
    return newZa   
}

console.log(randZa())