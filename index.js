console.log("Hello World");
let num1 = parseInt(prompt("Provide a number"));
let num2 = parseInt(prompt("Provide another number"));
let total = num1 + num2;

if(total<10){
	console.warn("The sum is: " + total);
}else if(total>=10 && total<=20) {
	let diff = num1 - num2;
	alert("The difference of the two numbers are: " + diff);
	console.log("The difference is: " + diff);
}else if(total>=21 && total<=29) {
	let prod = num1 * num2;
	alert("The product of the two numbers are: " + prod);
}else if(total>=30) {
	let quot = num1 / num2;
	alert("The quotient of the two numbers are: " + quot);
}



let name = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));


if(name=="" || age=="" || isNaN(age)) {
	alert('Are you a time traveler?');
}else {
	alert("Hello " + name + ". Your age is " + age);
}

function isLegalAge(age) {
	if(age>=18)	{
		alert("You are of legal age.");		
	} else {
		alert("You are not allowed here.");		
	}
}

isLegalAge(age);

switch (age) {
	case 18:
		alert("You are not allowed to party.");
		break;
	case 21:
		alert("You are now part of the adult society.");
		break;
	case 65:
		alert("We thank you for your contribution to society.");
		break;
	default:
		alert("Are you sure you're not an alien?")
		break;
}

try {
	isLegalAge('one')
	throw new Error('isLegalAge not defined');
	}catch(error){
	console.warn(error.message);
}finally{
	alert("Another message");
}