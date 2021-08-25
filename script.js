console.log('Hello world!');
console.log('För att starta en JS-fil: skriv "node filnamn.js"');

var x = 5   // function scope
let y = 10  // block scope
if( true ) {
    var x = 500;   // samma x som den globala variabeln
    let y = 1000;  // finns bara i blocket
}

console.log('x är: ' + x);
console.log('y är: ' + y);


let z = 5   // global variabel
let w = 10  // global variabel
function magic() {
    let z = 10;  // lokal variabel, skymmer den globala z
    w = 20;      // ändra globala variabeln w
}
magic();
console.log('z är: ' + z);
console.log('w är: ' + w);

console.log(0.1 + 0.2);

let dinosaur = {
	name: 'Triceratops',
	horn: 3
}
dinosaur.food = 'plants'
console.log('Dinosaur: ', dinosaur);
console.log(dinosaur.friends);


let mixed = 1 + 'två' + true + {}
console.log('Mixed: ', mixed, 'är en: ', typeof(mixed));
