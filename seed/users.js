const db = require('../db');//importing db from dbfolder
const User = require('../models/user');//importing user.js from models folder

//It is another layer of error handling.
db.on('error',console.error.bind(console,'MangoDB connection error:'))


//creating an async() function -
const main = async () =>{
    const users = [
        { name: 'Benny', age: 28, status: 'active' },
        { name: 'Claire', age: 28, status: 'active' },
        { name: 'Joey', age: 28, status: 'active' },
        { name: 'Abe', age: 22, status: 'pending' },
        { name: 'Sunny', age: 23, status: 'pending' },
        { name: 'Lizzy', age: 28, status: 'active' },
        { name: 'Julie', age: 21, status: 'active' }
    ]

    //wait for something to happen and then I want to do the below line
    await User.insertMany(users);
    console.log("Created users!");
}

//Once its executed and connects to the database,it's going to create 7 users in the collection.
const run = async () =>{
    await main()
    db.close();//closing default db connection 
}
run();  // we are calling the run() function


//MongoDB  --> collection and document is same as
//SQLDB    -->    Table   and record 