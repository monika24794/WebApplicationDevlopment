var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : "root",
  password : 'password',
  database : "cdac"
});
// console.log("hello world");
// console.log("hello world");
// console.log("hello ");
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/sample")
  .then(() => console.log('Connected!'));
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    name:String,age:Number
  })
  const mymodel = mongoose.model("users",userSchema );
var express = require('express');
//console.log(typeof express);\
var app = express();
//console.log(app);
//http:/localhost:9000/users
//route for mongo db
app.get("/users",async function (req, res) {
    //res.send("fetch data from MongoDb  this rouate")
    try {
        var ans=await mymodel.find()
        res.send(ans)
    } catch (error) {
        res.send("something went wrong")
    }
})
//Route for my sql database
app.get("/mysqlusers",function (req, res)
 {
connection.query('SELECT * from emp',
 function (error, results, fields) {
    if (error) throw error;
    res.send(results);
    console.log('The solution is: ', results[0].solution);
  });

    })
app.post("/users", function (req, res) {
    res.send("store value in database")
})
app.put("/users", function (req, res) {
    res.send("update value in database")
})
app.delete("/users", function (req, res) {
    res.send("delete value in database")
})
app.listen(9000);