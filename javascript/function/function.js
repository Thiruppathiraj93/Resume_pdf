document.writeln("task 1")
document.writeln("<br/>")
function  findsquare(num){
   return num*num
}
document.writeln("the given square value is:",findsquare(5))
document.writeln("<br>")
document.writeln("task 2")
document.writeln("<br/>")
function check_even_or_odd(num){
    if(num%2==0){
        document.writeln("even")
    }else{
        document.writeln("odd")
    }
}
check_even_or_odd(5)
check_even_or_odd(18)
document.writeln("<br>")
document.writeln("task 3")
document.writeln("<br/>")
function find_greater(num1,num2){
    if(num1>num2){
        return  num1
    }else 
        return num2
}
document.writeln(find_greater(12,11))
document.writeln("<br>")
document.writeln("task 4")
document.writeln("<br/>")
function celsiusTofahren(celsius){
    return (celsius * 9/5) + 32;
}
document.writeln("celsius to fahren is:",celsiusTofahren(32))
document.writeln("<br>")
document.writeln("task 5")
document.writeln("<br/>")
function findlength(str){
    return str.length;
}
document.writeln("length of given string is : ",findlength("airoplane"))
document.writeln("<br>")
document.writeln("task 6")
document.writeln("<br/>")
function findrectangle(length,width){
    return length*width
}
document.writeln("area of rectangle is :", findrectangle(20,20))
document.writeln("<br>")
document.writeln("task 7")
document.writeln("<br/>")
const add = (a, b,c) => a + b + c
document.writeln("the given value is",add(10,10,10))
document.writeln("<br>")
document.writeln("task 8")
document.writeln("<br/>")
function greetUser() {
  document.writeln("Good Morning!");
}
greetUser(); 
document.writeln("<br>")
document.writeln("task 9")
document.writeln("<br/>")
function addNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum =  sum +array[i];
  }
  return sum;
}
document.writeln(addNumbers([10, 20, 30, 40])); 
document.writeln("<br>")
document.writeln("task 10")
document.writeln("<br/>")
function reverseString(str) {
  let reversed = "";  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i]; 
  }
  return reversed;
}
document.writeln(reverseString("malayalam")); 





