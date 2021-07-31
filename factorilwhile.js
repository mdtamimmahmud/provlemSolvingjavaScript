

function factoril(digit){
var y = 1;
var factoril = 1;
while ( y <= digit ){
    var factoril = factoril * y;
     // console.log(y, factoril);
     y++
}

return factoril;

}

var Reselt = factoril(20);
console.log(Reselt);


function fact(digit){
var fact = 1;
var i = 1;
while( i <= digit){
     var fact = fact * i;
     i++;
     
}

return fact;

}

var reselt = fact(20);
console.log(reselt);

