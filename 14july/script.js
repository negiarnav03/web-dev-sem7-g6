// NODE JS

// debouncing:  we are controlling the number of calls to optimise the solution. Basically making optimistic calls and to evoke functions.
// it is  a technique to make sure that a function is not called to many times in a short period of time.
//used to prevent function from being called multiple times when user is trying in a textbox or clicking a button.


console.log("SCRIPT START");


const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("input",(event)=>{
    console.log("INPUT WORD: ",event.target.value);
})



// SetTimeOut & SetInterval ?



