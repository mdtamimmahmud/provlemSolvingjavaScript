var  speech = "I am computer     engineer, and     software developer.";
 var count = 0;
for( i = 0; i < speech.length; i++){
  var char = speech[i];

  if( char == " " && speech[i-1] != " "){
     count++
  }

}
console.log(count);

