var factoril = 1;

for( i = 1; i < 10; i++){
     var factoril = factoril * i;
     console.log(i, factoril);
}


function factoril(digit){
     var factoril = 1;
     for( x = 1; x < digit; x++){
          var factoril = factoril * x;
          console.log(x, factoril);

     }

     return factoril;
}

var reselt = factoril(20);
console.log(reselt);





