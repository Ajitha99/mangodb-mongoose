const User = require('./models/user')
const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require("./db/index");
// const user = require('./models/user');

const app = express()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send("This is the root")
})
//route that shows all products
app.get('/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})



//if there is an error, we will not
// see it 
//unless we use a try catch
// app.get('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const users = await User.findById(id)
//     if(!users) throw Error ('User not found')
//     res.json(users)

//   } catch (e) {
//     console.log(e)
//     res.send('User not found!')
//   }
// })

// app.get('/names/:name',async (req,res) => {
//   try{
//     const uname = req.params.name;
//     console.log("user name is: "+ uname);
//     const allUsers= await User.find({})
//     // console.log(allUsers);
//     const res = allUsers.filter((ele) => {
//       if(ele.name === uname){
//         return ele;
//       }
//     })
//     res.send(res);
//   }
//   catch (e){
//     console.log(e);
//     res.send('User not found')
//   }
// })



// app.get('/names/:name', async (req, res) => {
//   try {
//     const uname = req.params
//     const uname = await User.find({name : uname })
//     if(!uname) throw Error ('User not found')
//     res.json(uname)

//   } catch (e) {
//     console.log(e)
//     res.send('User not found!')
//   }
// })

app.get('/status/:status', async (req, res) => {
  try {
    const ustatus = req.params;
    const users = await User.find({ status : ustatus })
    if(!users) throw Error ('User not found')
    res.json(users)

  } catch (e) {
    console.log(e)
    res.send('User not found!')
  }
})