console.log('qs1');
let number;
number = window.prompt("Enter a number");
if(number%5 ==0){
    console.log('number is multiple of 5');
}
else{
    console.log('number is not a multiple of 5');
}
console.log('qs2');
let number2; 
number2 = window.prompt("Enter a grade");
if(number2 > 90 && number2 < 100){
    console.log('your grade is A');
}
else if(number2 > 70 && number2 < 89){
    console.log('your grade is B');
}
else if(number2 > 60 && number2 < 69){
    console.log('your grade is C');
}
else if(number2 > 50 && number2 < 59){
    console.log('your grade is D');
}
else if(number2 > 0 && number2 < 49){
    console.log('your grade is E');
}
console.log('qs3');
let number3; 
let number4;
let op;
number3 = window.prompt("Enter First number ");
number4 = window.prompt("Enter Second number ");
op = window.prompt("select +, -, * or /")
let result;
switch(op){
    case "+":
        result = number3 + number4;
        break
    case "-":
        result = number3 - number4;
        break
    case "*":
        result = number3 * number4;
        break
    case "/":
        result = number3 / number4;
        break
    default:
        console.log("error");
}
console.log("your resutl is " + result);

console.log('qs4');

for (let i = 0; i <= 100; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else if(i%3 == 0){
        console.log("fizz");
    }
    else {
        console.log(i);
    }
}
