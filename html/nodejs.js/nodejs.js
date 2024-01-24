// VAR--FUNCTION LEVEL SCOPE(accessible within the function)

// function exampleFunction() {
//     if(true) {
//         var functionscopedvar ="i am function scoped";
//     }
//     console.log(functionscopedvar);
// }
// exampleFunction();
// console.log(functionscopedvar);



//LET,CONST(cannot changed the value like pi)--BLOCK LEVEL SCOPE(accessible inside the block)

// function exampleFunction() {
//     if(true) {
//         let functionscopedvar ="i am function scoped";
//     }
//     console.log(functionscopedvar);
// }
// exampleFunction();
// console.log(functionscopedvar);



// function exampleFunction() {
//     if(true) {
//         let functionscopedvar ="i am function scoped";
//         console.log(functionscopedvar);
//     }    
// }
// exampleFunction();
// console.log(functionscopedvar);


// function exampleFunction() {
//     if(true) {
//         const functionscopedvar ="i am constant";
//          console.log(functionscopedvar);
//     }   
    
// }
// exampleFunction();
// console.log(functionscopedvar);

//in let you cannot re declare the variable while in  var you can 

// function exampleFunction() {
//     if(true) {
//         let a =2;
//         let a=3;
//          console.log(functionscopedvar);
//     }   
    
// }
// exampleFunction();
// //console.log(functionscopedvar);


//SHADOWING--LOCAL AND GLOBAL VARIABLE
// var shadowedvar="i am global";
// function exampleFunction(){
//     var shadowedvar="i am local";
//     console.log(shadowedvar);
// }
// console.log(shadowedvar);

//YOU CAN RE-DECLARE THE LET AGAIN AND AGAIN BUT IN DIFFERENT SCOPES.

// 
// hoisting---allows to use var and functions before declaring it.(happens with let and var both)
//(ONLY DECLARATIONS ARE HOISTED, NOT THE INITIALIZATION)
// console.log(x);//(undefined because only declaration is hoisted but value assigned latr )
// var x=5;
// console.log(x);

// console.log(x);
// let x=5;
// console.log(x);

///HOISTING WITH FUNCTION
// hello();
// function hello(){
//     console.log("hello world");
// }

//var shows default initialisation of undefined and let does nt thats why shws error (cannot access before initial...)
// we should declare variables at the top of their scope
//WE dont declare var with its data type --LOOSELY TYPE
// PRIMITIVE DATA TYPES 
//1.STRING,TYPE OF -
// let x="string";
// console.log(x);
// console.log(typeof(x));

//2.NUMBER 
// let x=23;
// console.log(x);
// console.log(typeof(x));

//3. BOOLEAN
// let x=true;
//  console.log(x);
// console.log(typeof(x));
//4.UNDEFINED
//5.NULL

//OBJECT DATA TYPE
//1.OBJECT--key-value pair
// let person={
//     name:"alice",
//     age:30,
//     isStudent:false
// };
// console.log(person.name);

//2.ARRAY--can store value of diifferent data types 
// let fruits=[1,"banana","orange"];
// console.log(fruits[0]);

//3.FUNCTION 
// function add(a,b){
//     return a+b;
// }
// var a=add(2,3);
// console.log(a);
 //DYNAMIC TYPING -any varible can hold value of any data type
 // 4. TYPEOF OPERATOR
 // 5. type coercion--- when operators are used with different data types --automatically converted to common type
 //let result=5+"5"; (will convert into string)

 //console.log(result); result="55";
 //"2"+"2"-"2" RESULT=20
 //(the output will be a number type ) 
 //(- cannot be performed with strings)