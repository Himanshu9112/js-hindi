 const accountId = 144553
 let accountEmail = "himanshu@gmail.com"
 var accountPassword = "12345"
 accountCity = "Unnao"

//  accountId = 2  // not allowed 

accountEmail = "hc@hc"
accountPassword = "21212121"
accountCity = "Kanpur"
let accountState;

 console.log(accountId);


 /*prefer  not to use var because of issue in block scope and functional scope*/
 console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);