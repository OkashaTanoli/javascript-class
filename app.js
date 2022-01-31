//Console.log
//Alert 
//Document.write

// console.log("Hello Uzair")
// alert('Hello Usama bhai')
// document.write('hello hamza bhai')


// Variable
// var a = 10;
// var b = 20;
// var c = a+b+4*9
// var b = "ali";


// var a = 10
// var b = " khan"
// var c = a + b
// console.log(c)


//Conditional statements
// var a = 10;
// var b = 20;
// var c = 30;



// if (a > b) {
//     console.log("if")
// }

// else if(b > c){
//     console.log('elseif')
// }

// else {
//     console.log("else")
// }


// var uname = prompt("enter your name")
// console.log("hello " + uname)
// document.write("Hello" + uname)


// = is assigning operator
// == is comparison operator
// === is comparison operator

// var input = prompt("Enter Your name")

// var a = 10;
// if(a === "10"){
//     console.log("Welcome")
// }
// else{
//     console.log("bye")
// }

var a = 10;
var b = 5;
// if ((a > b && b < a) && a === b) {
//     console.log("if True")
// }
// else {
//     console.log("else False")
// }


// if (a === b || b < a || b > a) {
//     console.log("True")
// }
// else {
//     console.log("false")
// }


var eng = parseInt(prompt("enter english marks"))
var urdu = parseInt(prompt("enter urdu marks"))
var math = parseInt(prompt("enter math marks"))
var chem = parseInt(prompt("enter chem marks"))
var phy = parseInt(prompt("enter phy marks"))
var totalMarks = parseInt(prompt("Enter Total Marks"))


var obtmarks = eng + urdu + math + chem + phy;
var percentage = (obtmarks * 100) / totalMarks;

console.log(percentage)
if (percentage <= 100 && percentage >= 80) {
    console.log("A+ Grade")
}
else if (percentage <= 79 && percentage >= 70) {
    console.log("A Grade")
}
else if (percentage <= 69 && percentage >= 60) {
    console.log("B Grade")
}
else if (percentage <= 59 && percentage >= 50) {
    console.log("C Grade")
}
else if (percentage <= 49 && percentage >= 40) {
    console.log("D Grade")
}
else if (percentage < 40) {
    console.log("Fail")
}
else {
    console.log("Incorrect Input")
}