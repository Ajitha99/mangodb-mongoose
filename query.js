//CRUD actions
const db = require('./db')
const User = require('./models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//Finds all users
const findAllUsers = async () => {
  const allUsers= await User.find({})
  console.log(allUsers);
}
//Finds a specific users
const findaUsers = async () => {
    const aUser= await User.find({name: 'Benny'})
    console.log(aUser);
  }
  // Finds all users older than 25
  const findaUserGrt = async () => {
    const aUser= await User.find({age: { $gt: 25 }})
    console.log(aUser);
  }
  // Finds all active and younger than 25
  const findaUserlsYoung = async () => {
    const aUser= await User.find( {$and:[{age: { $lt: 25 }}, {status: 'active'}]})
    console.log(aUser);
  }
  
  // const lessTwentyFive = async () => {
  //   const less = await User.find({ age: { $lt: 25 }, status: "active" });
  //   console.log(less);
  // };
  

// Creates a User
const createUser = async () => {
//   const penguinBooks = await Publisher.find({ name: 'Penguin Books' })
  const aNewUser = new User({ name: 'Raj', age: 40, status: 'active' })
  await aNewUser.save()
  console.log("Created a User:", aNewUser);
}

// Updates a User
const updateaUser = async () => {
  const updatedUser = await User.updateOne({ name: 'Abe'}, { name: 'YahYah' })
  console.log(updatedUser);
}
// Deletes a User
const deleteaUser = async () => {
  const deleteUser = await User.deleteOne({name: 'Sunny'})
  console.log(deleteUser);
}



const run = async () => {
  // await findAllUsers()
  // await findaUsers()
  // await createUser()
  //  await updateaUser()
    // await findaUserGrt()
  await findaUserlsYoung()
    //await deleteaUser()
    db.close()
}


run()