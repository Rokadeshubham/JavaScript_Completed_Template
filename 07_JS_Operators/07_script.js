// Assignment operator =
var num1 = 10;
console.log("value of a:"+num1);

// Arithmetic operators + - * /
var a = 10;
var b = 30;
var sum = a + b;
console.log("The Sum Of a and b is:" +sum);



// Short hand math += , -= , *= , /=

var p = 10;
var q = 20;
var add = 0;
add = add + (p+q);
add += (p+q);
console.log(add);

// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age< 18){
    console.log("You are minor");
}
else{
    console.log('You are Major');
}


// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x +1;
x += 1;
x++;
console.log(x);

// Logical operators AND , OR
var inRelation = true;
var parentAgreed = false;
if(inRelation && parentAgreed){
    console.log('get mary soon');
}
else{
    console.log('wait until parents agreed');
}

// String Concatenation Operator(+)
var test = 10 + 20 ;
console.log(test);
var test = 10 + 30 + "20" +10 +20 +50 ;
console.log(test);



// Ternary operator (? :)
age = 25;
(age < 18) ? console.log('Your Minor'): console.log('Your Major');

// Type of operator
var abc = 10;
console.log('value:' +abc + " DataType " +typeof abc)


// == operator
var a =10;
var b = 10;
if(a ==  b){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');
}


// === operator
var a =10;
var b = "100";
if(a ===  b){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');
}
