var business = 200;
var minister = 400;
var socib = 500;
var max = Math.max(business, minister, socib);
// console.log(max);

if (business > minister){
     if (business > socib) {
          console.log("Bussiness is the bigger");
     }

     else{
          console.log("Socib is the bigger");
     }
}

else {
     if (minister > socib) {
          console.log("minister is the bigger");
     }

     else{
          console.log("socib is the bigger");
     }
}