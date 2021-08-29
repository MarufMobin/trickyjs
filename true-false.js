/* 
Falsy:


1. false 
2. 0
3. empty string 
4. undefined
5. null
6. Nan
*/

/* Truthy
true
any number (Positive string Or Negetive )
any string including single space whiteSpace, '0', 'false'
[]
{}

Anything else that is not falsy will be truthy
*/

// false
const x = false;
if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}

// 0
const x = 0;
if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}

// empty String = '';
const x = '';
if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}


// undefined
// let x;  ==> undefined;

if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}


// null
let x = null;
if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}

// NaN
let x = parseInt('hellow');

if( x ){
    // console.log(x, "is truth Value");
}else{
    // console.log(x, "false value");
}