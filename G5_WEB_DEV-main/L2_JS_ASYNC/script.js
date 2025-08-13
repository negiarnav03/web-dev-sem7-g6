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

let arr = [2, 3, 4, 6, 8, 5]

// function doubleArrVal(arr){
//     let output = []

//     for (var i =0;i<arr.length;i++){
//         output.push(arr[i]*2);
//     }
//     return output;
// }

// const output = doubleArrVal(arr)

// console.log(output);

Array.prototype.calculate = function (logic) {
    let output = []

    for (var i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

function triple(x){
    return x*x*x
}
// map 
const output = arr.calculate(triple);
console.log(output);