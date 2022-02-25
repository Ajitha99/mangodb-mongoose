//importing mongoose 
const mongoose = require('mongoose');

//connecting to the database  
//userDatabase - is the name of the database              //allows us to parse the data correctly - this is what mongodb wants us to do
mongoose.connect('mongodb://127.0.0.1:27017/userDatabase',{useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
    //after mongoose makes database connection with MongoDb, we're going to shoot .then with call back function
    console.log('Successfully connected to MongoDB.');
}).catch(e => { //it's going takein error if it doesn't connect to database.
    console.error('Connection error', e.message);
})

//creating a variable db
//You can get the default Connection object with mongoose.connection. Once connected, the open event is fired on the Connection instance
const db = mongoose.connection

//we're re assigning it--
//The module.exports is a special object which is included in every JavaScript file in the Node.js application by default.
// The module is a variable that represents the current module, and exports is an object that will be exposed as a module. 
//So, whatever you assign to module.exports will be exposed as a module -- here it is exposed as db so in users.js we are importing it.
module.exports = db;