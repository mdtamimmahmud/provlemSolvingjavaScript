 function fibolacci(n){

     if (n == 0) {
          return 0;
     }
     if (n == 1 ) {
          return 1;
     }
     else{
          return fibolacci(n-1) + fibolacci(n-2);
     }
 }

 var Reselt = fibolacci(12);
 console.log(Reselt);