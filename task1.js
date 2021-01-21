/**
|--------------------------------------------------
| TASK 1
|--------------------------------------------------
*/

//Create A program that takes a name from the user and append "Mr." at the start of the name.
var input = "";
var initial = "Mr.";

input = prompt("Please enter your name: ");
var name = initial +" "+ input;
console.log(name);
/**
|--------------------------------------------------
| TASK 2
|--------------------------------------------------
*/

//Create a program that takes an input from the user as a string, count the number of characters and show it in alert
//HINT =====> String is an array of characters in javascript's core

var input = prompt("Please enter some string:");
var length = input.length;
alert("number of characters in this string are: "+length);

/**
|--------------------------------------------------
| TASK 3
|--------------------------------------------------
*/

Create a program that takes an input from user as a string and remove any whitespaces in the input given.
HINT ====> search for "trim" in javascript

/**
|--------------------------------------------------
| TASK 4
|--------------------------------------------------
*/

Which of the following variable names are incorrect? 
1. _name
2. $name_1
3. 1_#name
4. #name

3. 1_#name is incorrect, we cannot add numeric literals in start of a variable name.
/**
|--------------------------------------------------
| TASK 5
|--------------------------------------------------
*/

Solve the equation below and the answer should not be in float point value

//2 + 6 * 8 - 9 + (2/3) + 9
 
var num = 2 + 6 * 8 - 9 + (2/3) + 9;
console.log(num);
var res = Number.parseFloat(num).toFixed(0); //Will convert any float number to integer value.
console.log(res);

/**
|--------------------------------------------------
| TASK 6
|--------------------------------------------------
*/
What will be the output of the following program? 

//var product1 = 200 * 3;
//var product2 = 300; 
//var discount = 20; 
//var total = (product1 + product2) / discount

var product1 = 200 * 3; // 600
var product2 = 300; 
var discount = 20; 
var total = (product1 + product2) / discount;//(600+300)/20 => 45
//total will be 45

/**
|--------------------------------------------------
| TASK 7
|--------------------------------------------------
*/
//write a program that performs the following operations


//1. data type of phone number should be a number 
//2. data type of NIC should be string 
//3. add a greeting before the name e.g hello mr.{name}

var phoneNumber = 03205757562 
var NIC = 4250187968352
var name = "umair"

if(typeof phoneNumber == "number")
  console.log("phoneNumber is a number");
else
{
  console.log("phoneNumber is not a number");
  phoneNumber = Number.parseInt(phoneNumber);
  if(typeof phoneNumber == "number")
    console.log("phoneNumber is now a number");
  else
    console.log("phoneNumber cannot be converted to number");
}

if(typeof NIC == "string")
  console.log("NIC is a string");
else
  {
  console.log("NIC is not a string");
  NIC = NIC.toString();
  if(typeof NIC == "string")
    console.log("NIC is now a string"); 
  else 
    console.log("NIC cannot be converted to string");
  }
  
var greetings = "hello mr. ";
console.log(greetings+name);

/**
|--------------------------------------------------
| TASK 8
|--------------------------------------------------
*/
//var age = 21

//write the following condition in a single line 

//if (age >= 20) {
//    console.log("Eligible")
//}

//HINT ====> search for single line statements in javascript

var age = 21;
console.log(age >= 20?"Eligible":"Ineligible");

/**
|--------------------------------------------------
| TASK 9
|--------------------------------------------------
*/
What will be the output of the following program? 

var product1 = 500 * 3;
var product2 = 600;
var discount = 20;
var total = (product1 + product2) / discount
var budget = 100

if (total < budget) {
    console.log("You did not exceed the budget")
} else {
    console.log("You are not allowed to spend this much money")
}

/**
|--------------------------------------------------
| TASK 10
|--------------------------------------------------
*/
What is the output of the following program 

var SAT = 200;
var avg = 150;
var GPA = 3;
var sport = "snooker"

if (SAT > avg || GPA > 2.5 || sport === "football") {
    console.log("You're an awesome student");
}
else {
    console.log("You are not eligible");
}

/**
|--------------------------------------------------
| TASK 11
|--------------------------------------------------
*/

var myMarks = [30,45,68,32,45];
var criteria = 30; 
var bonusPoints = 5;

Solve the following scenario using the code above

You are given marks of a single student in an array, generate a loop that will "add" bonus points in each of the grade
in the array, then compare the new marks with the criteria given if any mark is less than criteria the student will be 
marked failed otherwise passed 



/**
|--------------------------------------------------
| TASK 12
|--------------------------------------------------
*/
What will the output at each of the console statements? 

var array=[1,2,3,4,5];
console.log(array.splice(2));
 
console.log(array);
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
 
console.log(array2.splice(2,0));
 
console.log(array2);
