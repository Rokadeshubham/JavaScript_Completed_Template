//BOM Operations

// width of the browser
var width = window.innerWidth
console.log('width of the browser is:' + width + 'px')

var height = window.innerHeight
console.log('the height of the browser :' +height + 'px')
// Open a new Tab


//window.open('http://www.google.co.in')


//print the current document

// window.print()

// DOM Properties to get body , title , URL
var body = document.body
console.log(body)

var title = document.title
console.log(title)

var url =document.URL
console.log(url)

//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events

function reverse(str) {
    var tempStr = '';
    for(var i=str.length;i>=0;i--){
        tempStr += str.charAt(i)

    }
    return tempStr
}


var h1Element = document.querySelector('#display')
h1Element.textContent = reverse('Good Morning')
h1Element.style.color= 'red'
h1Element.style.fontSize = '50px'

var h2Element = document.querySelector('h2')
h2Element.style.backgroundColor = 'orangered'
h2Element.style.color = 'white'
h2Element.style.boxShadow = '0 0 15px black'
h2Element.textContent = 'Connecting'


var inputElement = document.querySelector('#username')
inputElement.style.fontSize = '20px'
inputElement.style.outline = 'none'
inputElement.style.border = '4px solid grey'
var submitButton = document.querySelector('#submit')
submitButton.style.fontSize = '18px'
submitButton.style.backgroundColor = 'forestgreen'
submitButton.style.color = 'white'



function getUser() {
    var userText = inputElement.value
    var userError = document.querySelector('#user-error')
    /*alert('Username: '+userText)
    inputElement.value = ''*/
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green'
        userError.textContent = 'Valid User Name'
        userError.style.color = 'lightgreen'
    }
    else{
        inputElement.style.borderColor = 'red'
        userError.textContent = 'Invalid User Name'
        userError.style.color = 'red'
    }

}

//JS event Listeners
//1.Get the ele
//2.Add Event Listener
//3.Write the logic

submitButton = document.querySelector('#submit')
submitButton.addEventListener('click',getUserData)

function getUserData() {
    var userText = inputElement.value
    var userError = document.querySelector('#user-error')
   /* alert('Username: '+userText)
    inputElement.value = '' */
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green'
        userError.textContent = 'Valid User Name'
        userError.style.color = 'lightgreen'
    }
    else{
        inputElement.style.borderColor = 'red'
        userError.textContent = 'Invalid User Name'
        userError.style.color = 'red'
    }

}


//Event Listener for text box

inputElement = document.querySelector('#username')
inputElement.addEventListener('keyup',validate)
function validate() {
    var userText = inputElement.value
    var userError = document.querySelector('#user-error')
    /*alert('Username: '+userText)
    inputElement.value = ''*/
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green'
        userError.textContent = 'Valid User Name'
        userError.style.color = 'lightgreen'
    }
    else{
        inputElement.style.borderColor = 'red'
        userError.textContent = 'Invalid User Name'
        userError.style.color = 'red'
    }

}