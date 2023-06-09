const express = require('express');  //Import express with require keyword 
const app = express();   //create an app by calling the express() provided by the express framework
const port = 5050;  //Set the port for our local application
const myroute = require('./Router/routing')


// middleware
app.use(express.json());  //express.json() middleware is used to parses the incoming request object as a JSON object
app.use(myroute);
// app.use(express.static('public'));

// homepage routing
app.get('/', (req, res)=>{
    res.status(200).send("<h1>Welcome to the Doantion Camp</h1>");
    console.log("You are on Doantion Camp");
});


// server port/listing
app.listen(port, (err)=>{
    if(!err) console.log("Server is Connected")
    else console.log("Error in connection establishment");
});