

// function arrygetsum(numbars){
// var sum = 0;
// for(  i = 0; i < numbars.length; i++){
//      var element = numbars[i];
//      sum = sum + element;
// }
//  return sum;

// }


// var numbars = [34, 45, 56, 67, 78, 90];
// var result = arrygetsum(numbars);
// console.log( "total numbar : ", result);



function getArrySum(numbars){
     var sum = 0;
for( i= 0; i < numbars.length; i++){
      var element = numbars[i];
      var sum = sum + element;

}

return sum;

}

var numbars  =  [12, 34, 45, 56, 67, 78, 79]
var result = getArrySum(numbars);
console.log(result);


var total = getArrySum([12, 34, 66, 55, 60, 88, 99]);
console.log(total);