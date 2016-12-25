var user = prompt("Name?")
var age = prompt("What is your age?");
switch(user)
{
case 'Alex': 
if( age > 18 ){
console.log("You are adult");}
else {console.log("You are child");}
break;
case 'Gabi': 
if( age > 5 && age < 18 ){
console.log("You are teenager");}
else {console.log("You are either kid or oldie");}
break;
case 'Andy':
if( age === 10 || age === 20 ){
console.log("You have a nice age");}
else {console.log("You don't have a nice age");}
break;
default: 
console.log("Idk");

}