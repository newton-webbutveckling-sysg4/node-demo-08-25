// C#
// public static int timesTwo(int x) {
// 	return x * 2;
// }
/*
function timesTwo(x) {
	return x * 2
}

const timesTwo = function(x) {
	return x * 2
}
let copy = timesTwo

const timesThree = function(x) {
	return x * 3
}


function registerCallback(callback) {
	callback()
}
registerCallback(timesTwo)
registerCallback(timesThree)


const timesTwo = (x) => { return x * 2 }
const timesTwo =  x  => x * 2
*/

function callback() { return 'value' }

let x = callback()   // anropa funktionen
let y = callback     // kopiera funktionen (egentligen är det en referens)

console.log('x', x);
console.log('y', y);


// let z = 547;
// z()


function parameterTest(a, b) {
	return a + b
}

console.log( 'Inga params: ', parameterTest() );
console.log( 'Fyra params: ', parameterTest(1, 3, 5, 8) );




//
