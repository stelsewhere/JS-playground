// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is 
// odd or even, and display a message to the screen.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 1) {
      alert(`${i} is Odd`)
    } else 
    if (i % 2 === 0) {
      alert(`${i} is Even`)
    }
  }

// Write a JavaScript conditional statement to find the largest 
// of five numbers. Display an alert box to show the result.

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a>b && a>c && a>d && a>e) {
  alert(a)
} else
if (b>a && b>c && b>d && b>e) {
  alert(b)
} else
if (c>a && c>b && c>d && c>e) {
  alert (c)
} else
if (d>a && d>b && d>c &&d>e) {
  alert(d)
} else
alert(e)

// Write a JavaScript program which iterates the integers from 
// 1 to 100. But for multiples of three print "Fizz" instead 
// of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0)  {
      console.log(i + "Fizz")
  } else
  if (i % 5 === 0) {
      console.log(i + "Buzz")
  } else
  if (i % 3 ===0 && i % 5 === 0) {
      console.log(i +"FizzBuzz")
  } else {
      console.log(i)
  }
}

// Write a simple JavaScript program to join all elements of the 
// following array into a string.

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join("+"))

// Write a JavaScript function that reverse a number. 

function reverse(num) {
  num = num + ""
  return num.split("").reverse().join()
}

console.log(reverse(32243))

// Write a JavaScript function that returns a passed string with 
// letters in alphabetical order.

function ab(text) {
  return text.split("").sort().join("")
}

console.log(ab("webmaster"))

// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38
var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + dayList[day] + ".");
var hour = today.getHours()
var minute = today.getMinutes()
var second = today.getSeconds()
var prepand = (hour >= 12 ? "PM" : "AM")
console.log("Current time is: " + hour + prepand + " : " + minute + " : " + second)