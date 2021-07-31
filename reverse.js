var statement = "Hello Alien Bhi Brother";
function reverseString(str){
     var reverse = "";
for(i = 0; i < str.length; i++){
     var char = str[i];
     reverse = char + reverse;
}
     return reverse;

}

var forAlien = reverseString(statement);
console.log(forAlien);
var foodvolg = reverseString("Hello every one");
console.log(foodvolg);