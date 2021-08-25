let x = 0.1 + 0.2

console.log(x);
// Avrundningsfel på grund av att datorer räknar flyttal med binära talsystemet

console.log(Math.floor(x))
console.log(Math.ceil(x))

let y = Math.floor(x * 100) / 100
console.log(y);

// Math.round
