// Features Of JS ES6

// 1) without arrow function exmple

function areaCircle(r){
    let pi = 3.14;
    let area = pi*r*r;
    console.log(area);
}
console.log(areaCircle(5));


// --------------------------------------------------------------------------------------------------


//arrow function exmple

 let circleArea = (r)=>{
    let pi = 3.14;
    return  pi*r*r;
    
};

// --------------------------------------------------------------------------------------------------


// 2) add some variable or equation in console.log

let name = "lokesh";

console.log('The ' + name + ' is software devloper' )

console.log(`The ${name} is software devloper`);


let a = 20;
let b = 30;

console.log(`The sum of a and b is ${a+b}`) //we use back-tick



// --------------------------------------------------------------------------------------------------


// 3) Spread Operator

function addNumber (a,b,c){
    console.log(a+b+c);
}

var nums = [3,4,5];
addNumber(nums[0],nums[1],nums[2]);

addNumber(...nums)  //Spread Operator


// --------------------------------------------------------------------------------------------------



var food = ['apple','mango'];
var newFood = ['banana',...food,'orange'];
console.log(newFood);



// --------------------------------------------------------------------------------------------------


// 4) In ES6 there is introduced " Let , Const keywords "

var collage = "ssbt";
var collage = "PCCOE";

console.log(collage);

let student = "lokesh";
// let student = "om";

console.log(student);


// --------------------------------------------------------------------------------------------------
