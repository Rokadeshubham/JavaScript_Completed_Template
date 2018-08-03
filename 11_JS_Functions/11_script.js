//creation of a simple function with no args and execute a function
function greet() {
    console.log('Good Morning');//Fun Def
}
greet()//fun Call

//creation of a simple function with args
function greetArgs(name) {
    console.log("Helo" + name + "GM")
}
greetArgs('John')

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Yr Old")

}
greetLessArgs('John')
//executing a function with more number of params
function greetMoreArgs(name,age) {

    console.log(" Hello " + name + " ur " +age+ " year of old ")
}
greetMoreArgs('Willy',40,'Manager')

//function overloading is not possible here



// functions with return values
function greetReturn(name) {
    var greeting = 'Good Morning ' + name;
    return greeting;
}
var greetMsg = greetReturn("John")
console.log(greetMsg)

//function with empty return /no return
function greetEmptyReturn() {
    var greeting = 'Good Morning '+name;
}
var emptyMsg = greetEmptyReturn("Willy");
console.log(emptyMsg);//undefined

// function Expressions with name and execution

var greetFn = function greet() {

    console.log('I am from greet function exression');
};
greetFn()



// Functions as arguments without args
// Functions as arguments with args args
function greet1(name) {
    console.log('I am from greet1 ' +name)

}
function greet2(name) {
    console.log('I am from greet 2 ' +name)
}
function greetEngine(fName,name) {
    fName(name);

}
greetEngine(greet1,'Willy')
greetEngine(greet2,'John')



// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName:function () {
        return this.firstName + ' ' + this.lastName;
    }

};
console.log(student.fullName())


// this keyword for accessing objects props in function


// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee ={
    name: 'rajan',
    age : '28',
    course : 'Eng',
    address:{
        city:'hyderabad',
        state:'Telengana',
        country:'India'
    },
    isFromState:function (state) {
       return (this.address.state === state);

    }
};
console.log('Is from telegana?' + employee.isFromState('Telengana'));
// Default Function Arguments (arguments)
function defaultArgs() {
    console.log(arguments)
}
defaultArgs('John',40)