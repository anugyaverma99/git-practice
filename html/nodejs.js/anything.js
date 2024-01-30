// //   TIMERS
// //  setTimeout function--it will execute the function after the delay of given time interval 

// const delayedfunction = () => {
//     console.log('delayed function executed!');
//     //setTimeout(delayedfunction,5000);
// };
// setTimeout(delayedfunction,5000);

//setInterval FUNCTION--it keeps on executing after the given interval of time 
// const repeatedfunction=()=>{
//     console.log('repeated function executed');
// };
// const intervalid=setInterval(repeatedfunction,1000);

// after given amount of time ,it will stop executing..
// setTimeout(()=> {
//     clearInterval(intervalId);  ///USED TO STOP THE INTERVAL 
//     console.log('interval stopped');
// },5000);

// CALLBACK FUNCTION--synchronous and asynchronous callback function
//higher order function--in which other functions can be passed as arguments

//SYNCHRONOUS CALLBACK FUNCTION-----
// function parentfunction(name,callback){
//     callback();
//     console.log("hey"+name);
// }
// function randomfunction(){
//     console.log("hey i am a callbackfunction");
// }
// parentfunction("random string",randomfunction);

//ASYNCHRONOUS CALLBACK FUNCTION
// function parentfunction(name,callback){
//     setTimeout(callback,1000);
//     console.log("hey"+name);
// }
// function randomfunction(){
//     console.log("hey i am a callbackfunction");
// }
// parentfunction("random string",randomfunction);


function parentfunction(name,callback){
    callback();
    console.log("hey"+name);
}
parentfunction("random string",randomfunction=()=>{console.log("hey i am a callback function")});