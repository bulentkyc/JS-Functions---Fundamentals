////////////////////////////////v1//////////////////////////////
/* let burger;

function getOrders() {
    let bun = prompt('Which bun?', 'White');
    let meat = prompt('What kind of meat?', 'chicken');
    let extra = prompt('What do you wish as extra?', 'Cheddar');
    burger = `${bun} bun, ${meat} meat and ${extra} as extra`;
}

function cookBurger() {
    let roast = prompt('How roasted?', 'Well done');
    burger += ` and cooked as ${roast}`;
}

let order = prompt('Do you wish to have a burger?', 'yes').toLowerCase();

while (order == 'yes') {
    getOrders();
    cookBurger();

    alert(`Here you're, your burger is ready with ${burger}`);

    order = prompt('Do you wish to have one more burger?', 'yes').toLowerCase();
} */

////////////////////////////////v2//////////////////////////////


function getOrders() {
    let bun = prompt('Which bun?', 'White');
    let meat = prompt('What kind of meat?', 'chicken');
    let extra = prompt('What do you wish as extra?', 'Cheddar');
    return `${bun} bun, ${meat} meat and ${extra} as extra`;
}

function cookBurger() {
    let roast = prompt('How roasted?', 'Well done');
    return  ` and cooked as ${roast}`;
}

let order = prompt('Do you wish to have a burger?', 'yes').toLowerCase();

while (order == 'yes') {

    alert(`Here you're, your burger is ready with ${getOrders()} ${cookBurger()}`);

    order = prompt('Do you wish to have one more burger?', 'yes').toLowerCase();
}


////////////////////////////////v3//////////////////////////////


function getOrders() {
    let bun = prompt('Which bun?', 'White');
    let meat = prompt('What kind of meat?', 'chicken');
    let extra = prompt('What do you wish as extra?', 'Cheddar');
    return `${bun} bun, ${meat} meat and ${extra} as extra`;
}

function cookBurger() {
    let roast = prompt('How roasted?', 'Well done');
    return  ` ${getOrders()} and cooked as ${roast}`;
}

let order = prompt('Do you wish to have a burger?', 'yes').toLowerCase();

while (order == 'yes') {

    alert(`Here you're, your burger is ready with ${cookBurger()}`);

    order = prompt('Do you wish to have one more burger?', 'yes').toLowerCase();
}

