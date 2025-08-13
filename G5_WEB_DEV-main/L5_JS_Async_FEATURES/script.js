console.log("SCRIPT START");

// //CALL FUNCTION

// // function greet() {
// //   console.log(this.animal, "typically sleep between", this.sleepDuration);
// // }

// // const obj = {
// //   animal: "cats",
// //   sleepDuration: "12 and 16 hours",
// // };

// // greet.call(obj);


// function welcomeStudents(welcomeMessage,goodbyeMessage){

  
//   return `${welcomeMessage} ${this.studentName} is a student of class ${this.studentClass} ${goodbyeMessage}`
// }

// const student1 = {
//   studentName:"Paras",
//   studentClass:"G4"
// }

// const student2 = {
//   studentName:"Devesh",
//   studentClass:"G6"
// }


// // call 

// welcomeStudents.call(student1,"Good Morning", "Bye");
// welcomeStudents.call(student2,"Good Evening", "TATA BYE BYE");


// //apply

// welcomeStudents.apply(student1,["Good Morning", "Bye"]);
// welcomeStudents.apply(student2,["Good Evening", "TATA BYE BYE"]);


// //bind

// const s1 = welcomeStudents.bind(student1,"Good Morning", "Bye");
// // const s2 = welcomeStudents.bind(student2,"Good Evening", "TATA BYE BYE");

// console.log(s1());
// console.log(s2());



//CURRYING

// function sumOfThree(a,b,c){
//   console.log(a+b+c);
// }

// sumOfThree(10,20,30)

// CURRIED FUNCTION 

// function sumOfThree(a){
//   return function(b){
//     return function(c){
//       console.log(a+b+c);
//     }
//   }
// }

// console.log(sumOfThree(20)(30)(40))

//SUBWAY

// 1. Choose bread - Garlic Bread/ Multigrain
// 2. Which Patty Do you want?
// 3. With Cheese or without?

// function chooseBread(bread){
//   return function(patty){
//     return function(cheese){
//       console.log(bread + patty + cheese);
//     }
//   }
// }



//EVENT CAPTURING AND BUBBLING

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");


grandParent.addEventListener("click",()=>{
  console.log("GRANDPARENT CLICKED!!");
})

parent.addEventListener("click",()=>{
  console.log("PARENT CLICKED!!");
})

child.addEventListener("click",()=>{
  console.log("Child CLICKED!!");
})