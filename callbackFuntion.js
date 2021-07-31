function callback(name, age, task){
     console.log('Hello ', name);
     console.log('your old', age);
     task();
}

function washHand(){
     console.log("wash your hand with the shop");
}

function takeShawar(){
     console.log("take a Showare");
}

function takeWork(){
     console.log("my visite the github");
}



callback('tanim ', 20, washHand);
callback('sakib ', 22, takeShawar);
callback('Somun ', 32, takeWork);