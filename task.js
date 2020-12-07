/* let total;
function sum(a) {
    total += parseInt(a);
}

alert('Result is: ' + sum(parseInt(prompt('First number')), parseInt(prompt('Second number'))));


alert(sum(2,5));
 */
/*
TASK: Prepare an application which is described below:
-Application will ask for numbers or ending for calculation.
-If user types any number app will continue asking for the new one.
-If user type 'no' app will stop asking and show sum of numbers which typed before.

--Optional Task: 
Stop asking and show the calculation when user types anything that not a number, 
instead of 'no'.
*/



//v1
/* let number = prompt('Please give me a number or type "no" to finis the calculation').toLowerCase();

let result = 0;

while (number != 'no') {
    result += parseInt(number);
    number = prompt('Please give me a number or type "no" to finis the calculation').toLowerCase();
}

alert(`Result is: ${result}`);

 */

/* 
//v2
let result = 0;
let number = 0;
do {
    result += parseInt(number);
    number = prompt('Please give me a number or type "no" to finis the calculation').toLowerCase();
} while (number != 'no')

alert(`Result is: ${result}`); */


/* //v3

function sum() {
    let result = 0;
    let number = 0;

    do {
        result += parseInt(number);
        number = prompt('Please give me a number or type "no" to finis the calculation').toLowerCase();
    } while (number != 'no');

    return result;
}

alert(sum()); */


//v4

function sum() {
    let result = 0;
    let number = 0;

    do {
        result += number;
        number = parseInt(prompt('Please give me a number or type "no" to finis the calculation'));
        console.log(number);
    } while (!isNaN(number));

    return result;
}

alert(sum());