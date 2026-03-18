// a) Normal Function
function greet() {
    console.log("Normal Function: Hello, World!");
}
greet();

// b) Arrow Function
const sayHello = () => {
    console.log("Arrow Function: Welcome to JavaScript!");
};
sayHello();

// c) Function with Return Value
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log("Function with Return Value: Sum = " + result );

// d) Callback Function
function calculate(x, y, callback) {
    let sum = x + y;
    callback(sum); // Executing the function passed as an argument
}

function display(result) {
    console.log("Callback Function: Result = " + result);
}

// Passing the 'display' function as the third argument
calculate(5, 7, display);