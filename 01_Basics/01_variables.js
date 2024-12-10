const accountId = 876542
let accountEmail = "siva@gmail.com"
var accountPassword = "12345"
accountCity="Jaipur"
let accountState;

// accountId=7 //not allowed

console.log(accountId);

accountEmail="new@gmail.com"
accountPassword="98654"
accountCity="Vizag"

console.table([accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/