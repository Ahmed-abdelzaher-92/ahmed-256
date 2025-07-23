

/*
var num = [ 10, 4 , 5 , 100]


var userInput = prompt("Enter a number:");


var findElement = num.find((item) => item > 20);
console.log(findElement);
if (userInput >20){
    console.log("Successfully");
}else {
    console.log("find an element greater than 20 " );
    }


  num.push(userInput);

if (userInput >20) {
    console.log("Successfully");
    
}

*/

var users = [];

var userNumber = prompt("Enter a number:");

function addUser(name, id, balance){

  var user = {
    name: name,
    id: id,
    balance: balance
  };

  users.push(user); 

}


for (var i = 0; i < userNumber; i++) {
  var name = prompt("Enter your name:");
  var id = prompt("Enter your ID:");
  var balance = parseFloat(prompt("Enter your balance:"));

  addUser(name, id, balance);
}

function editUserBalanceById(id, newBalance){
    var user = users.find(user => user.id === id);
    if (user) {
        user.balance = newBalance;
        console.log(`User balance updated: ${user.name} now has a balance of ${user.balance}`);
    }
    console.table(users);
}

function deleteUserById(id) {
    var index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`User with ID ${id} has been deleted.`);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
    console.table(users);
}

editUserBalanceById("23", 20)
deleteUserById("23")

console.table(users);