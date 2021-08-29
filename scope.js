const myAge = 25; //==> global scope ba global variable

function add( first, second){
    const result = first + second;
    return result;
    // first/second/result ==> ai guli holo local Scope ai guli function ar bhitore i assign kra ar ai kahanei thakbe
}

const sum = add( 25, 11 );



function blockScop( num1 , num2 ){
    // console.log(status) ==> hoisting ar problem a error
    const result = num1 + num2;
     if( result > 9 ){
        const status = "Sleeping"; //===> block scope Means if { ... } are the area is block scope  
        console.log(status);

        // status = "sleeping";
        // status = "active"; Emlicite global/global liking
    }
    // var maruf = "maruf"; ==> test var is function based 
    return result;
}

blockScop( 1,2)

// console.log(maruf) ==> var diye decliare kra var function base so error dibe ai ta diye;



/* ==> global liking
for( var i = 0; i < 10; i++){

}
// console.log(i); ==> show 10 thik na 
*/

/*
for( const/let i = 0; i < 10; i++){

}
// console.log(i);  */


/* 
[ NOTE: 

    1. global scope: sob jaigai je value pawa jabe tai global value.
    
    2. local scope: function ar vitorei takbe onnow kothaw means globla bhabe pawa jabe na.

    3. Block scope ja { } curly bracket ar chara onnow kothaw pawa jabe na . Ader k ( let/const ) k Hoist kra hobe na , var shudu martro hoist hobe .

    4. konow variable k jodi let/const/var use na kra hoi tobe ta akebare i implicite global Or global liking ble ==> aita variable liking holo.
    
    5. function ar parameter ke shudhu martro function A declare krte parbo bahire deliare krle ( Error kete hobe );

    6. Global delare korle sob khanei variable ar Access prwa jai

]

*/