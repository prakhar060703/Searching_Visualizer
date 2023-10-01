// swap function util for searching algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables searching buttons used in conjunction with enable, so that we can disable during searching and enable buttons after it
function disableSearchingBtn(){
    document.querySelector(".binarySearch").disabled = true;
    document.querySelector(".linearSearch").disabled = true;
}

// Enables searching buttons used in conjunction with disable
function enableSearchingBtn(){
    document.querySelector(".binarySearch").disabled = false;
    document.querySelector(".linearSearch").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during searching and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during searching and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can so animations of searching, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 30) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 90) + 10);
    }
    // array.sort(function(a,b){
    //     if(a>b) return 1;
    //     if(a<b) return -1;
    //     return 0;
    // });
    console.log(array);
    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*3}px`;
        bar.style.width=`${array[i]*0 +30}px`;
        bar.innerText=`${array[i]}`;
        bar.style.fontSize=`20px`;
        bar.style.color=`brown`;
        bar.style.fontWeight=`bold`;
        bar.style.align=`bottom`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
    
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function disableclear(){
    document.querySelector("#clr").disabled = true;
}
function enableclear(){
    document.querySelector("#clr").disabled = false;
}
// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSearchingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
