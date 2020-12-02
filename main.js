console.log('Hello Functions!');

/*
Syntax:
function name(params) {
    
}

Please find related explanations before then tasks.
*/

/*
First we should create function to use. But this creation will not be executed
unless called after (like on the line 20).
*/
function printMessage() {
    console.log('My Message');
}
//Here we call the function without any parameter. Also we have not created any parameter
//on the declaration.
printMessage();


/*
Here we created a function with a parameter.
HEADS-UP: we don't use var,let or const to create a parameter. It's auto defined. ()
Please compare this heads-up with line 33
*/
function coffeeMachine(beans) {
    console.log(`Here you are your coffee with ${beans} beans`);
}

/*
We don't call parameter names here. We just put the value as a static information or variable.
*/
let myFavBeans = 'Tchibo';

coffeeMachine(myFavBeans);
coffeeMachine('Dallmar');
coffeeMachine('Lavazza');


function toastMachine(bread, cheese, butter) {
    console.log(`Your toast is ready with ${bread} bread, ${cheese} cheese and ${butter} butter`);
}

let bread = prompt('Please type here one of breads below \nCorn\nWhite\nDark', 'White');

let cheese = prompt('Please type here one of breads below \nCorn\nWhite\nDark', 'White');

let butter = prompt('Please type here one of breads below \nCorn\nWhite\nDark', 'White');

toastMachine(bread, 'Cheddar', 'Irish');

toastMachine('Cheddar');


function sum(a,b) {
    alert(parseInt(a)+parseInt(b));
}

sum(prompt('first number'),prompt('second number'));


function burgerCooker() {
    let bun = prompt('What kind of bun do you wish?', 'Sesame');
    let meat = prompt('Which type of meat do you wish?', 'Chicken');
    let extra = prompt('What do you wish as extra', 'Cheddar');

    alert(`Your burger is ready with ${bun} bun, ${meat} meat and with ${extra}`);
}

let burger = prompt('Do you wish a burger?', 'yes').toLowerCase();

while(burger == 'yes') {
    
    burgerCooker();
    burger = prompt('Do you wish one more burger?', 'yes').toLowerCase();

}

alert(burger, bun, meat);
