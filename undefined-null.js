/* 
1. variable value not assign
2. function but didn't write return anything
3. jast wrote return but didn't return anything 
4. parameter that isn't passed
5. proparty doesn't exits in an object
6. access in array element out of range
7. accessing deleted array element
8. Explicitly set value to undefined

*/

// 1.st case undifine
let fist;
console.log(fist);

//2. case undifine

function second(x, y){
    const sum = x + y;
}
const result = second( 3, 91);
console.log(result);

// 3 case
function second(x, y){
    // document.getElementById('result');
    
}
const resultTwo = second( 3, 91);
 console.log(resultTwo);


// 4. case 

function num( x, y ){
    const resut = x + y;
    return;

    const fun = x * y;
    return sum;
}

const output = num( 5, 6);
console.log(output)

// 5. case
function num( x, y ){
    const resut = x + y;
    
    if( x < 10){
        return;
    }
    const fun = x * y;
    return sum;
}

const fourth = num( 2, 7 );
console.log(fourth);

// 6.case 
function double (a, b){
    const result = a * 2;
    console.log(b);
    return result;
}
//  double(81);

// 7.  case 
const student = {
    name : "Fuhad",
    maritualStatus : true,
    address : 'kalsi',
    job: 'tea stall'
}

console.log( student.education);

// 8. case 
const arrayUndif = [ 22, 54, 57, 52, 34, 96, 4 ];

 console.log( arrayUndif[9]);

const arrayUndif2 = [ 22, 54, 57, 52, 34, 96, 4, 524, 2 ];

// delete arrayUndif2[4];
// console.log( arrayUndif2); //[ 22, 54, 57, 52, <1 empty item>, 96, 4, 524, 2 ]
// console.log(arrayUndif2[4]);


// 9. Explicitly set undefined any how 

const nineth = undefined;
console.log(nineth)



/********************************/
        //NULL
/********************************/

const nyObj = { name: 'Samad', profession: null};