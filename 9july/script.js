// what is currying in javascript? : we pass single argument at a time.


//CURRYING FUNCTION

// console.log ("SCRIPT START");

// function sumOfthreeNumbers(a,b,c){
//     console.log(a+b+c);
//     return a+b+c;
// }

// sumOfthreeNumbers(2,4,6);


// function subwayOrder(bread,patty,cheese){
//     console.log(`MY BREAD $(bread) with PATTY: $(patty) CHEESE:$(cheese)`)
// }

// subwayOrder("MULTIGRAIN","ALLO","WITH CHEESE");


// //CURRYING IN JS
// function subwayOrder2(bread){
//     return function(patty){
//         return function(cheese){
//             console.log(`MY BREAD $(bread) with PATTY: $(patty) CHEESE:$(cheese)`)
//         }
//     }
// }


// subwayOrder2("ORIGANO")("CHIKEN")("WITH CHEESE");


// what is EVENT: 



// WHAT IS DOM? : DOM is the tree/ herachial structure.


// EVEN LISTENERS

// const container1 =  document.getElementById("container");

// container1.addEventListener("click",()=>{
//     console.log("this is the container 1")
// })


// event capturing and bubling? top to bottom and bottom to top.
// if we use true the event will capture else bubble by default,

// const grandParent = document.getElementById("grandparent");
// const parent = document.getElementById("parent"); 
// const child = document.getElementById("child");


// // grandParent.addEventListener('click', ()=>{
// //     console.log("RED div ")
// // },true)


// grandParent.addEventListener('click', ()=>{
//     console.log("RED div ")
// })

// parent.addEventListener('click', ()=>{
//     console.log("green div")
// })


// child.addEventListener('click', ()=>{
//     console.log("blue div ")
// })



// EVENT DELIGATION: reduce no. of event listeners to handle nested events.

const unorderedList = document.getElementById("navbar");


unorderedList.addEventListener('click',(event)=>{
    if (event.target.tagName==="LI"){
        console.log(event.target.textContent);
    }
});


// let's add new item

const newElement = document.createElement("li");
newElement.innerText = "Navbar";
unorderedList.appendChild(newElement);


