// console.log("HELLO WORLD");

// console.log(a);

// var a =123;

// console.log(a);

// function abc(){
//     console.log("THIS IS FUNCTION ABC");

//     function hgf(){
//         console.log("THIS IS HGF");
//     }
//     hgf();
// }


// abc();


// arrow funcction

// var a =200;
// console.log(a);

// xyz();

// var xyz=()=>{
//     console.log("XYZ FUNCTION CALLED");
// }




// let b  =300;
// console.log(b);


// {
//     // Compound Statement
//     //GrandParent
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     // console.log(d);
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     {
//         //Parent

//         // console.log(a);
//         // console.log(b);
//         // console.log(c);
//         {
//             //Child

//             let d = 200000;

//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }

//     }
// }

// function abc(){
//         var a = 100;
//         var b = 200;
//         var c = 300;
//     function def(){
//         var d =400;
//         function ijk(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);

//         }
//         ijk()
//     }
//     def()
// }
// abc()

// for (var i =0; i<=5;i++){
//     function closure(i){
//         setTimeout(()=>{
//         // var a =i;
//         console.log(i);
//     },2000)
//     }
//     closure(i)
// }


//HOF:

function xyz(cb){
    console.log("I AM XYZ FUNCTION");
    cb();

}

function cb(){
    console.log("I am CB FUNCTION")
}

xyz(cb);