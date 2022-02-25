//First you require() mongoose, then use the Schema constructor
// to create a new schema instance
const mongoose = require('mongoose');

//we are trying to bring in the structure property 
const Schema = mongoose.Schema;


const User = new Schema(
// now we are going to write the structure of our database
//remember: our databases are objects- startes with object { }
//Schema is a blue-print for database
{
    name: { type: String, required: true},
    age: {type: Number, required: true},
    status: {type: String, required: true}
},
{timestamps: true},//any edit, the timestamp will be added
)


module.exports = mongoose.model('users', User);
// The first argument is the singular name of the collection that 
// will be created for your model (Mongoose will create the database
// collection for the above model 'users' above), and the second argument
//  is the schema you want to use in creating the model.

// Note: Once you've defined your model classes you can use them to create,
//  update, or delete records, and run queries to get all records or particular
//  subsets of records. We'll show you how to do this in the Using models section,
//  and when we create our views.