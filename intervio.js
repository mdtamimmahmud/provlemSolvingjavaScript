// function factoril(n) {
//      var factoril = 1;
// for(i = 1; i <= n; i++){
//      var factoril = factoril * i;
//      console.log(i, factoril);
// }
//  return factoril;

// }

// var Reselt = factoril(12);
// console.log(Reselt);

// function fact(digit){
// var i = 1;
// var fact = 1;
//  while( i <= digit){
//       var fact = fact * i;
//      // console.log(i, fact);
//      i++
//  }
//  return fact;
// }

// var Resealt = fact(12);
// console.log(Resealt);




// function factoril(n){
//      if ( n == 0 ) {
//           return 1;
//      }

//      else{
//           return n * factoril(n-1);
//      }

// }

// var reselt  = factoril(10);
// console.log(reselt);





// function fact(n){
// var fact = [0, 1, 2]
// for(i= 2; i <= n; i++){
//      fact[i] = fact[i-1]  + fact[i-2]
//      // console.log(fact[i], fact[i-1], fact[i-2]);
// }
// return fact;
// }

// var reselt = fact(12);
// console.log(reselt);


// function fibolacci(n){
// var fibolacci = [0, 1, 2]
// for ( p = 2; p <= n; p++) {

//      fibolacci[p] = fibolacci[p-1] + fibolacci[p-2]

// }
//      return fibolacci;
     
// }

// var Reselt = fibolacci(12);
// console.log(Reselt);



var business = 860;
var banker = 730;
var dayWork = 900;

if (business > banker) {
     if (business > dayWork) {
          console.log("business  is bigger");
     }
     else{
          console.log("daywork is bigger");
    }
    
}

else{
          
     if (banker > dayWork ) {
          console.log("Banker is bigger");

     }
     else{
          console.log("daywork is bigger");
     }
     
     }