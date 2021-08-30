const a = "Maruf Hussian";
const b = 23;
const c = true;

// primitve type 
/* 
1. number 
2. string
3. boolean
4. null 
5. undefine
6. symbol
*/
// NoN primitive type
/* 
    Object  
    const arr = [ 265, 255, 21, 4, 24 ]
    console.log(typeof arr) ==> Object
    [ Note : javaScript a Array akta Object hisebe count hoi ba Array ta object type show kre ]

    ******Important Note****
     const arr = [ 265, 255, 21, 4, 24 ]
     console.log( Array.isArray(arr))

     //type of function 

        // function triple(x){
        // }
        // console.log( typeof triple)
    // count of length 
        // function triple(x, y, z){
        // }
        // console.log(triple.length)

    function ar lent ber kra jai ooita parameter ar upor base kre show kre
*/
/* 
function triple(x){
}
console.log( typeof triple)

function triple(x, y, z){

}
console.log(triple.length) */


// Usign object to define value changing scopes 

// fist primitive type 

function triple( x, y, z ){
    x = 11111;
    y = 22222;
    z = 33333;
}

const num1 = 1;
const num2 = 5;
const num3 = 6;
triple(num1,num2,num3);
console.log(num1,num2,num3);


// Using Function define

function triple( myObject ){
    myObject.name = 'Mobin';
    myObject.age = '22';
}

const myObject = { name: 'maruf', age: 11, contries: 'Bangleadesh'}
triple(myObject);
console.log(myObject);

 

