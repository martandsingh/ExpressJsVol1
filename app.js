/**
 * We have installed express js now and this will be the entry point of our application.
 */

 //All imports
 const express = require('express')
 const bodyParser = require('body-parser')
 const path = require('path')

 //express method 
 const app = express()

 var employee = {
     empName : "Martand Singh",
     empCode : 13737,
     dept : "I.T"
 }

 app.use(express.static(path.join(__dirname,"public")))


 //Middleware has a very important role..

 var respUnauthorized = {
     status : 401,
     msg : "Unauthorized User"
 }

 var respSuccess = {
    status : 200,
    msg : "authorized User"
}


 //Default route - this will call index.html
app.get('/', function(req, res){
    console.log('Server running...Welcome to home page.')
    res.send('Server running..changed...nodemon')
    res.end();
})

app.get('/about.html', function(req, res){
    console.log('Server running...Welcome to home page.')
    res.send('Server running..changed...nodemon')
    res.end();
})

app.get('/getMyName', function(req, res){
    res.json(employee)
    res.end()
})

app.post('/senddata', function(req, res){
    res.send('post request for /senddata')
    res.end()
})


 //Here we are listrning port number 3000.
 app.listen(3000, function(){
     console.log("server running on Port :  3000....")
 })


 //Always you have to stop and start service after every change.
 //nodemon - you dont have to stop and start your service...just refresh it,
 // static content