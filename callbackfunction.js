function welcomeMass( greetHandler, name ){
    // console.log(name);
    greetHandler( name );
}
const name = "MD: Maruf";
// const arrayOfName = [ "maruf", "mobin", "Hossain"];
// const myObj = { name: "Maruf", age: 52 };
// welcomeMass(name);

// console.log(welcomeMass(name))


function greetMorning( name ){
    // console.log('Good Morning');
    // console.log(name, "Good Morning");
}

welcomeMass(greetMorning ,name)





// Refress  Call back system

function firstPossition(firstName, lastHandelar){
   return lastHandelar( firstName );
}

function lastPossition( firstName ){
    const lastName = 'Mobin';
    return firstName + lastName;
}

const firstName = 'Maruf';
console.log(firstPossition( firstName, lastPossition));



// hardcoded call back function

function globalFunction( name, placeAfunction ){
    placeAfunction(name)
}
function fistFunction( name ){
    console.log("Good Morning", name);
}
function secondFunction( name ){
    console.log("Good AfterNoon", name);
}
function thirdFunction( name ){
    console.log( "Good Night", name);
}
globalFunction( "Maruf", fistFunction);
globalFunction( "Hussian", secondFunction);
globalFunction( "Mobin", thirdFunction);





function handleClick(){
    console.log('click The Button');
}
// document.getElementById('btn').addEventListener('click',handleClick);

document.getElementById('btn-clicked').addEventListener('click',function(){
    console.log('click The Button')
});


