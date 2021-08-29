/**********Data Types in js*************
// Primitive types
1. number
2. string
3. boolean
4. undefine
5. null
6. object ===>non premetive
7. symbol
***********************/


let a = 'Hello';
let b = a;
// console.log(a,b);
a = 'gelo';
console.log(a,b);


const x = { job : 'web Devloper'};
const y = x;

// console.log( x,y)
x.job = 'Font end Developer';
y.job = 'Font end Developer';
console.log( y, x)