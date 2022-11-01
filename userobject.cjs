require('dotenv').config();

const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987
}
console.log(user.first_name);
console.log(user.age);

let name = process.env.UserName;

console.log('name :'+process.env.UserName);
console.log('passwd :'+process.env.passwd);






