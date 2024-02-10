
function welcome() 
{
alert('Welcome to my website!');
}

function wrongPassword() 
{
var pass = prompt('Enter the Password:');
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("Error! Please Enter a valid password.");
document.write("<button></body>");
}

function message1() 
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("Hello Dear!<br><br>Hope you in fine condition.<br>Please refresh this page to go back.<br><br>Regards,<br>Aun Abbas");
document.write("<button></body>");
}

function threeAlerts() 
{
alert('Basic structure of this website is designed through HTML.');
alert('All Stylings, colors and backgrounds are decorated by CSS');
alert('JavaScript is finally added to make it interactive.');
}

function message2() 
{
alert("This alert is being displayed as part of this website.");
}

function addElements()
{
alert("After closing this dialogue, see how the title (head) changes.");
var newElement = document.createElement('title'); 
newElement.textContent = 'See! This Changed.'; 
var oldElement = document.getElementById('title'); 
oldElement.replaceWith(newElement);

alert("See how an element is added before html in body. (See Navbar)");
var tag = document.createElement("a"); 
var text = document.createTextNode("[Addition before HTML]"); 
tag.appendChild(text); 
var element = document.getElementById("navbar"); 
element.appendChild(tag);

alert("See how an element is added in html body. (See button of Q6)");
var tag = document.createElement("p"); 
var text = document.createTextNode("[Addition in body]"); 
tag.appendChild(text); 
var element = document.getElementById("addBody"); 
element.appendChild(tag);

alert("See how an element is added at end of body. (A button is added after Q25)");
var tag = document.createElement("button"); 
var text = document.createTextNode("[Addition after HTML]"); 
tag.appendChild(text); 
var element = document.getElementById("questions"); 
element.appendChild(tag);
}

function declareUsername()
{
var username;
alert("Variable declared as: var username");
}

function declareMyName()
{
var myName;
myName = prompt("Enter your full name:");
var message = "Full Name: " + myName;
alert(message);
}

function variableHelloWorld()
{
var message;
message = "Hello World";
alert(message);
}

function bioDataStudent()
{
var name = prompt("Enter Name of Student:");
var fname = prompt("Enter Father's Name:");
var dob = prompt("Enter Date of Birth:");
var regNo = prompt("Enter Registration number:");
var message = "Student " + name + " s/o " + fname;
alert(message);
message = "Born on " + dob;
alert(message);
message = "Registration number:" + regNo;
alert(message);
}

function email()
{
var email = prompt("Enter your email address: ");
var message = "Your Email address is " + email;
alert(message);
}

function messageBrowser()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(message);
document.write("<button></body>");
}


function messageAlertBrowser()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(message);
document.write(message);
document.write("<button></body>");
}

function age()
{
var age = prompt("Enter your age (years): ");
age = "Your age is " + age + " years";
alert(age);
}

function visits()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var visitCount = 1;
if (localStorage.getItem("visitCount")) 
  {
  visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
  }
localStorage.setItem("visitCount", visitCount);
document.write("You have visited this site " + visitCount + " times.");
document.write("<button></body>");
}

function birthYear()
{
var birthYear = prompt("Enter your birth year: ");
age = "You were born in  " + birthYear;
alert(age);
}

function clothingStore()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var name = prompt("Enter Name of Customer:");
var product = prompt("Enter name of ordered product:");
var qty = prompt("Enter quantity of ordered product:");
var message = name + " ordered " + qty + " " + product + " on XYZ Clothing Store.";
document.write(message);
document.write("<button></body>");
}

function legalVariables()
{
var variable1, variable2, variable3;

variable1 = "Aun Abbas";
variable2 = 1601;
variable3 = true;

document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.writeln("Variable 1: " + variable1 + "<br>");
document.writeln("Variable 2: " + variable2 + "<br>");
document.writeln("Variable 3: " + variable3);
document.write("<button></body>");
}

function illegalVariables()
{
var legalVariable1 = "legalVariable1";
var legal_variable_2 = "legal_variable_2";
var $price = "$price";
var camelCaseVariable = "camelCaseVariable";
var variable123 = "variable123";

var illegalVariable1 = "illegal-variable";
var illegal_variable_2 = "123variable";
var illegal_$price = "variable@symbol";
var space = "variable with space";
var keyword = "break"; 

document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("<b>Legal Variable Names:</b><br><br>");
document.write("1. " + legalVariable1 + "<br>");
document.write("2. " + legal_variable_2 + "<br>");
document.write("3. " + $price + "<br>");
document.write("4. " + camelCaseVariable + "<br>");
document.write("5. " + variable123 + "<br><br><br>");

document.write("<b>Illegal Variable Names:</b><br><br>");
document.write("1. " + illegalVariable1 + "<br>");
document.write("2. " + illegal_variable_2 + "<br>");
document.write("3. " + illegal_$price + "<br>");
document.write("4. " + space + "<br>");
document.write("5. " + keyword + "<br>");
document.write("<button></body>");
}

function rulesNaming()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("<p> Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p> Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p> Variable names are case-sensitive</p>");
document.write("<p> Variable names should not be JS keywords</p>");
document.write("<button></body>");
}

function add()
{
var number1 = +prompt("Enter the first number:");
var number2 = +prompt("Enter the second number:");

var add = number1 + number2;

document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("Addition result: " + add);
document.write("<button></body>");
}

function multiOperations()
{
var number1 = +prompt("Enter the first number:");
var number2 = +prompt("Enter the second number:");

var subtract = number1 - number2;
var multiply = number1 * number2;
var divide = number1 / number2;
var mod = number1 % number2;

document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("Subtraction result: " + subtract + "<br>");
document.write("Multiplication result: " + multiply + "<br>");
document.write("Division result: " + divide + "<br>");
document.write("Modulus result: " + mod + "<br>");
document.write("<button></body>");
}

function q23()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var myVariable;
document.write("Value after variable declaration is: " + myVariable + "<br>");
myVariable = 5;
document.write("Initial value: " + myVariable + "<br>");
myVariable++;
document.write("Value after increment is: " + myVariable + "<br>");
myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");
myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");
var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");
document.write("<button></body>");
}

function movieTicket()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("<p>The cost of buying 5 movie tickets is: PKR " + totalCost);
document.write("<button></body>");
}

function table()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
var num = +prompt("Enter a number:");
document.write("<b>Multiplication Table for " + num + ":</b><br><br>");
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
    }
document.write("<button></body>");
}

function a201()
{
var a = +prompt("Assign a value (number) to a:");
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("Result:<br>The value of a is: " + a + "<br>.....................................<br><br>");
document.write("<br>The value of ++a is: " + ++a);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");
document.write("<br>The value of a++ is: " + a++);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");
document.write("<br>The value of --a is: " + --a);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");
document.write("<br>The value of a-- is: " + a--);
document.write("<br>Now the value of a is: " + a);
document.write("<br>");
document.write("<button></body>");
}

function a202()
{
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("<b>Output of:</b>--a<br>............................<br>");
var a = 2, b = 1; 
document.write("a = " + a + "<br>b = " + b + "<br><br>");
var result = --a;
document.write("<b>Result:</b> " + result + "<br><b>Explaination:</b> '--' before a means a prefix decrement operator.");
document.write("<br>It decreased the value of 'a' by 1, before using variable in code");
document.write("<br>Value of 'a' is reduced by 1, which becomes 1. It appears as result.<br><br><br>");

document.write("<br><br><b>Output of:</b> --a - --b<br>............................<br>");
var a = 2, b = 1; 
document.write("a = " + a + "<br>b = " + b + "<br><br>");
var result = --a - --b;
document.write("<b>Result:</b> " + result + "<br><b>Explaination:</b> '--' before 'b' again means a prefix decrement operator.");
document.write("<br>It decreased the value of b by 1, before using variable in code. Result is subtracted from '--a'.");
document.write("<br>Value of 'a' is reduced by 1, which becomes 1. Value of 'b' is also reduced by 1, and becomes 0.");
document.write("<br>So the results appears as 1 - 0, which is 1.<br><br><br>");

document.write("<br><br><b>Output of:</b> --a - --b + ++b<br>............................<br>");
var a = 2, b = 1; 
document.write("a = " + a + "<br>b = " + b + "<br><br>");
var result = --a - --b + ++b;
document.write("<b>Result:</b> " + result + "<br><b>Explaination:</b> '++' before 'b' is a prefix increment operator.");
document.write("<br>It increased the value of b by 1, before using variable in code. Result is added to '--a - --b'");
document.write("<br>Value of 'a' is reduced by 1, which becomes 1. Value of 'b' is also reduced by 1, and becomes 0.");
document.write("<br>Again a prefix increment '++b' adds 1 to 'b' and 'b' becomes 1. So the results appears as 1 - 0 + 1, which is 2.<br><br><br>");

document.write("<br><br><b>Output of:</b> --a - --b + ++b + b--<br>............................<br>");
var a = 2, b = 1; 
document.write("a = " + a + "<br>b = " + b + "<br><br>");
var result = --a - --b + ++b + b--;
document.write("<b>Result:</b> " + result + "<br><b>Explaination:</b> '--' after 'b' is a postfix decrement operator.");
document.write("<br>It decreased the value by 1, after using variable in code. Result is added to '--a - --b + ++b + b--");
document.write("<br>Value of 'a' is reduced by 1, which becomes 1. Value of 'b' is also reduced by 1, and becomes 0.");
document.write("<br>Again a prefix increment '++b' adds 1 to 'b' and 'b' becomes 1. At last, appears 'b--' which is a postfix decrement.");
document.write("As postfix acts after usage of variable, value of 'b' doesn't change and the results appears as 1 - 0 + 1 + 1, which is 3.<br><br><br>");
document.write("<button></body>");
}

function a203()
{
var name = prompt("Enter your name:");
var message = "Hi " + name + ". Have a nice day.";
alert(message);
}

function a204()
{
var num = +prompt("Enter a number:");
if(num===0)
  {
  num = 5;
  }
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("<b>Multiplication Table for " + num + ":</b><br><br>");
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
    }
document.write("<button></body>");
}

function a205()
{
var sub1 = prompt("Enter name of 1st Subject:");
var sub2 = prompt("Enter name of 2nd Subject:");
var sub3 = prompt("Enter name of 3rd Subject:");
var marks1 = +prompt("Enter marks of 1st Subject:");
var marks2 = +prompt("Enter marks of 2nd Subject:");
var marks3 = +prompt("Enter marks of 3rd Subject:");
var total = marks1 + marks2 + marks3;
document.write("<html><head><link rel='stylesheet' href='style.css'></head><body><button class='btn' onClick='location.reload()'>");
document.write("<table><tr><td><b>Subject</b></td><td><b>Total Marks</b></td><td><b>Obtained Marks</b></td><td><b>Percentage</b></td></tr>");
document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>300</b></td><td><b>" + total + "</td><td><b>" + total/3 + "%</b></td></tr></table>");
document.write("<button></body>");
}

function karachi()
{
var city = prompt("Enter name of the city:");
if(city==="Karachi")
  {
  alert("Welcome to the city of lights.");
  }
}

function gender()
{
var gender = prompt("Please enter your gender (male / female):");
if(gender==="male")
  {
  alert("Good Morning Sir!");
  }
if(gender==="female")
  {
  alert("Good Morning Ma'am!");
  }
}

function fuel()
{
var fuel = +prompt("Enter quantity of remaining fuel (in Litres):");
if(fuel < 0.25)
  {
  alert("Please refill the fuel in your car!");
  }
}

function a304()
{
var a = 4;
if (++a === 5)
  {
  alert("given condition for variable a is true");
  }
  
var b = 82;
if(b++ === 83)
  {
  alert("given condition for variable b is true");
  }
  
var c = 12;
if (c++ === 13)
  {
  alert("condition 1 is true");
  }
if (c === 13)
  {
  alert("condition 2 is true");
  }
if (++c < 14)
  {
  alert("condition 3 is true");
  }
if(c === 14)
  {
  alert("condition 4 is true");
  }
  
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
  {
  alert("The cost equals");
  }
if (true)
  {
  alert("True");
  } 
if (false)
  {
  alert("False");
  }
if("car" < "cat")
  {
  alert("car is smaller than cat");
  }
}

function randomNum()
{
var randomNum = Math.floor(Math.random() * 10);
var guess = +prompt("Enter your guess (1 - 10):");
if(guess === randomNum)
  {
  alert("Bingo! Correct Answer.");
  }
if(guess+1 === randomNum || guess-1 === randomNum)
  {
  alert("Close Enough to the Correct Answer.");
  }
}

function div3()
{
var num = +prompt("Enter a number:");
var rem = num%3;
if(rem===0)
  {
  alert(num + " is divisible by 3.");
  }
else
  {
  alert(num + " is not divisible by 3.");
  }
}


function evenOdd()
{
var num = +prompt("Enter a number:");
var rem = num%2;
if(rem===0)
  {
  alert(num + " is an even number.");
  }
else
  {
  alert(num + " is an odd number.");
  }
}


function temp()
{
var temp = +prompt("Enter the temperature:");
if(temp > 40)
  {
  alert("It is too hot outside.");
  }
if(temp > 30 && temp < 40) 
  {
  alert("The Weather today is Normal.");
  }
if(temp > 20 && temp < 30)
  {
  alert("Today’s Weather is cool.");
  }
if(temp > 10 && temp < 20)
  {
  alert("OMG! Today’s weather is so Cool.");
  }
}

function calculate() 
{
var num1 = +prompt("Enter 1st number:");
var num2 = +prompt("Enter 2nd number:");
var op = prompt("Enter operator (+ - * / %):");
if(op === "+")
  {
  var answer = num1 + num2;
  message = num1 + " + " + num2 + " = " + answer;
  }
else if(op === "-")
  {
  var answer = num1 - num2;
  message = num1 + " - " + num2 + " = " + answer;
  }
else if(op === "*")
  {
  var answer = num1 * num2;
  message = num1 + " x " + num2 + " = " + answer;
  }
else if(op === "/")
  {
  var answer = num1 / num2;
  message = num1 + " / " + num2 + " = " + answer;
  }
else if(op === "%")
  {
  var answer = num1 % num2;
  message = num1 + " % " + num2 + " = " + answer;
  }
else
  {
  message = "Incorrect operator entered! please try again.";
  }
alert(message);
}