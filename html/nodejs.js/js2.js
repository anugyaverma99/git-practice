// OPERATORS
//1.Arithmetic operators
//2.Comparison Operators
//(=== compare values as well as the data type)
//3. Logical operators

//FOR LOOP
// for (let i=0;i<5;i++){
//     console.log(i);
// }
 
//WHILE LOOP
// let count=0;
// while(count<5){
//     console.log(count);
//     count++;
// }

//DO - WHILE LOOP
// let count =0;
// do {
//     console.log(count);
//     count++;
// }
// while (count<5);

//FOR....IN LOOP (iterates over properties of object)
// let person={
//     name:"JOHN",age:30,occupation:"developer"
// };
// for(let key in person){
//     console.log(key + ":" + person[key]);
// }

// a function without a name ==anonymous function
// let car={
//     make:"toyota",
//     model:"camry",
//     year:2022,
//     iselectric:false,
//     start:function(){
//         console.log("engine started!!");
//     }
// };
// console.log(car.make); //accessing properties
// car.start();    //calling a method

//OBJECT CONSTRUCTOR FUNCTION
// function Book(title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }
///CREATING INSTANCES OF THE OBJECT
// let Book1=new Book("the catcher in the rye","J.D.Salinger",1951);
// let Book2=new Book("to kill a mokingbird","harper lee",1960);
// console.log(Book1);
// console.log(Book2.year);
// console.log(Book1.author);


//  ARRAYS......
// let fruits=["apple","banana","orange","grapes"];
// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits[1]);
// //1.adding elements in end-push method
// //2.adding eleemnts in beginning--unshift method
// //3.removing last element--pop method
// //4. removing first element--shift method
// fruits.push("kiwi");
// console.log(fruits);
// fruits.unshift("mango");
// console.log(fruits);
// let removedlast=fruits.pop();
// let removedfirst=fruits.shift();
// console.log(removedlast);
// console.log(fruits);
// console.log(removedfirst);
// console.log(fruits);
// let index=fruits.indexOf("orange");
// console.log(index);
// for(let i=0;i<fruits.length;i++){ //ITERATING  USING A FOR LOOP
//     console.log(fruits[i]);
// }
// let citrus=fruits.slice(1,3); //SLICING AN ARRAY
// console.log(citrus);
/// SPLICING AN ARRAY (modifying oriiginal array)
//let removed=fruits.splice(1,2,"pear","melon");
//CONCATENATION ARRAY
// let morefruits=["grapefruit","pineapple"];
// let allfruits=fruits.concat(morefruits);
// console.log(fruits);
// console.log(allfruits);

//FUNCTIONSS.......

// const multiply=function(a,b){
//     return a*b;
// };
// console.log(multiply(4,6));
// const product=multiply(4,6);
// console.log("function expression-product:",product);

//ARROW FUNCTION 

// const subtract=(a,b) => a-b; //use {} for multiple statements 
// const difference=subtract(8,3);
// console.log('arrow function-difference:',difference);


///   ERROR HANDLING
try{
    //code that may throw an error
    throw new Error("an error");
} catch (error){
    //code to handle the error
    console.error(error.message);
}finally{
    //code that will run regardless of whether ther was an error
    console.log("cleanup code");
}