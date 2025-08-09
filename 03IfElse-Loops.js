var a = 10;
var b = 11;
var c = 12;
var greatest = null

// one liner to initialise veriables
// var a=5,b=6,c=7;

if(a>b && a>c){
    greatest = a;
}
else if(greatest<b && b>c){
    greatest = b;
}
else{
    greatest = c;
}


console.log(greatest);


// let a = b = c = 0;
// (Be careful with this — b and c become global variables if not declared properly! 
// Better to declare each explicitly.)

// Ternary Operator
let great=0
great = a>b && a>c? great = a: great<b && b>c? great =b : great = c;

console.log("great", great)

/**************************Loops****************************/
