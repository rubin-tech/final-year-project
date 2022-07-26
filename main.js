var number1 = parseInt(prompt("Enter a number:"))
var number2 = parseInt(prompt("ENter another number"))
alert("Enter '+', for addition '-'for subtraction '/' for division, * for multiplication")
var num = prompt("Enter a sign")
if (num == '*'){
    alert(number1*number2)
} 
else if (num == '+'){
    alert(number1+number2)
} 
else if (num == '-'){
    alert(number1-number2)
}
else if(num == '/'){
    alert(number1/number2)
}
else{
    alert("Enter a valid number")
}
