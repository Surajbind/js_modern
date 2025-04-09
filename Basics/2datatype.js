// this is a comment

"use strict";// treats all js code as newer version code

const accoundId = 123345;
var accountPassword = "ThisisP@WD";
let accountCity = "Chile";

let accountState;

// console.log(accoundId);
// console.table([accoundId,accountPassword,accountCity,accountState]);

/* Never Use Var
    As it does not make use of scope 
    Use Let as it always uses scope
*/

//type of data type

//number => 
//big Inte =>
//String => "text"
//boolean => true/false
//null => standalone value

//undefined => undefined

//symbol => unique

//object 

// console.log(typeof null); //object
// console.log(typeof Object); //function
// console.log(typeof undefined);//undefined


// Primitive data types
//String, Boolean , Null, Undefined , Symbol, BigInt, Number


// Reference (Non-Primitive) 
//Array, Object, Functions
const arr = ['ArrayD1','ArrayD2','ArrayD3','ArrayD4']; //non primitive refrence type data 

const obj = {
    name:"Suraj",
    id:12,
    isElegible:true
}

const printFunc = function(){
    for(let i=0;i<=arr.length;i++){
        console.log(" "+arr[i]);
    }

    console.table([obj.name,obj.id,obj.isElegible]);
}

printFunc();