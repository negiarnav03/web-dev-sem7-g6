console.log("SCRIPT START");

// setTimeout(()=>{
//     console.log("I AM GOING TO RESTAURANT");
// },4000);

// setTimeout(()=>{
//     console.log("I AM Checking the Menu for ordering ");
// },3000);


// function walkInRestaurant(cb) {
//     console.log("I am Walking Inside the Restaurant");
//     setTimeout(cb, 3000);
// }

// function menuCheck(cb) {
//     console.log("I am Checking the Menu");
//     setTimeout(cb, 2000);

// }

// function foodOrder(cb) {
//     console.log("I AM ORDERING THE FOOD");
//     setTimeout(cb, 6000);

// }

// function havingLunch(cb) {
//     console.log("I AM HAVING THE FOOD");
//     setTimeout(cb, 8000);

// }

// function payBill(cb) {
//     console.log("I AM Paying the Bill");
//     setTimeout(cb, 3000);

// }

// function walkAwayFromRes() {
//     console.log("BYE BYE GOING HOME");
// }

// walkInRestaurant(() => {
//     menuCheck(() => {
//         foodOrder(() => {
//             havingLunch(() => {
//                 payBill(() => {
//                     walkAwayFromRes();
//                 })
//             })
//         })
//     })
// })



// console.log("SCRIPT END");

//ARRAY OPERATIONS

// let arr = [2, 3, 4, 6, 8, 5]

// // function doubleArrVal(arr){
// //     let output = []

// //     for (var i =0;i<arr.length;i++){
// //         output.push(arr[i]*2);
// //     }
// //     return output;
// // }

// // const output = doubleArrVal(arr)

// // console.log(output);

// ///////////////////////////////////////////////////
// let cart  = ["shoes", "shirt", "wallets"]

// function orderDetail(cart){
//     // 1. Total no of products 
//     // 2. Total Amount of Products nos*1000
// }
// function orderSummary(){
//     // total price and total product
//     // then generate orderId 

// }
// function paymentGateway(){
//     // order Id, product details and price .. Payment is successful 
// }
// function successfulOrder(){
//     // it will all the details about the payment product namse and everything 
// }



/// PROTOTYPE ARRAY FILTER

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);


////// map function


var arr1 = [2,4,67,8,9,3];

// const doubleValues = arr.map((x)=> x*2);
// console.log(doubleValues);

// Array.prototype.mapReplica = function (logic){
//     let output = []
//     for( var i =0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// const doubleValues = arr.map((x)=> x*2);

// function doubleValue(x){
//     return x*2
// }
// const myOutput = arr1.mapReplica((x)=>x*2)
// console.log(myOutput)

// REDUCE FUNCTION

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

const sumOfAll = array1.reduce(function (acc,curr){
    acc = acc+curr
    return acc;
},0);

console.log(sumOfAll);


