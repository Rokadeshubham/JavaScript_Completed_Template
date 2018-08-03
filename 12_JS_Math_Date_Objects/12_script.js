/*
        Math Object Examples

     */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('PI value : ' +piValue);

var sqrt = Math.sqrt(144);
console.log('sart of 144: '+sqrt);
// find the min of 4 numbers
var min = Math.min(45,123,54,6,67,7,7879,44,45,43,32);
console.log('min value: '+min)

// find the Max of 4 numbers
var max = Math.max(45,123,54,6,67,7,7879,44,45,43,32);
console.log('min value: '+max)

// find the 'x' to the power of 'y' value, ex: 2^4

var pow = Math.pow(2,4)
console.log('2 ^ 4: ' + pow)

// generate the random numbers from 0 to 100

var rand = Math.round(Math.random()*123456);
document.querySelector('#display').textContent = rand.toString()

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
//String Methods
*/
var str = "Good Morning";
var length = str.length;
console.log('str lenght: '+length);//length

var lowercase = str.toLowerCase();//lowercase
console.log('lowercase: '+lowercase);

var uppercase = str.toUpperCase();//uppercase
console.log('lowercase: '+uppercase);

var partialStr = str.substring(0,4);//good
console.log('partial string is: '+partialStr);

var remaining = str.substring(5);
console.log('remaining String: '+remaining);//goodmorning
//CHAR COUNT
str = "Good Morning"
function countchar(str) {
    var count = 0;
    for(var i =0;i<str.length;i++){
        if(str.charAt(i) === 'o'){
            count++;
        }
    }
    return count;
}
console.log('count: ' + countchar(str));

//reverse String
function reverseString(str) {
    var revStr = '';
    for(var i=str.length-1;i>=0;i--){
        revStr += str.charAt(i);
    }
    return revStr;
}
console.log('Reverse: '+reverseString(str));




myStr= "1234";
function strNumber(str) {
    var array =['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN'];
    var output = '';
    for(var i=0; i<str.length;i++){
        output +=array[str.charAt(i)]+' ';
    }
    return output;
}
console.log('strNumber '+ strNumber(myStr));

/*

    Date Object Examples

 */

// get today's date


//get date of the month 0 - 31 getDate()


//get day of the week 0 - 6 getDay()

// get full day of the week using switch statement


// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/