console.log("SCRIPT START");

// const grandparent = document.getElementById("grandparent");

// const parent = document.getElementById("parent");

// const child = document.getElementById("child");

// grandparent.addEventListener("click",(e)=>{
//     console.log("THIS IS RED BLOCK")
//     e.stopPropagation()
// },false)
// parent.addEventListener("click",(e)=>{
//     console.log("THIS IS GREEN BLOCK")
//     e.stopPropagation()

// },false)
// child.addEventListener("click",(e)=>{
//     console.log("THIS IS BLUE BLOCK")
//     e.stopPropagation()

// },false)



// const productList = document.getElementById("productList");

// productList.addEventListener("click",(event)=>{
//     // console.log("Products")
//     if (event.target.tagName === "LI"){
//         console.log("CLICKED ON :", event.target.textContent)
//     }
// })


// // IF I WANT TO ADD NEW ELEMENT

// const newElement = document.createElement("li");
// newElement.textContent = "Bottle"
// productList.appendChild(newElement)


////////////////////////////////////////////////////////////////////

const textBox = document.getElementById("textBox");

let thisTime;
textBox.addEventListener("input",(event)=>{
    
    clearTimeout(thisTime);
    thisTime =setTimeout(()=>{
        console.log("TYPED: ",event.target.value)
    },3000)
})
