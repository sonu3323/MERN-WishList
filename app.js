const express = require("express");
const cors = require('cors');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000 ;
 
//use handle the error of cors
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());



//Routes 
app.use(router)



//******    Production setup for node to add react build files   ************

app.use(express.static('client/build'));

const path = require("path");

app.get("*" , (req , res) => {
       res.sendFile(path.resolve(__dirname ,"client" , "build" , "index.html"))
})

app.listen(port , () => {
    console.log("Server is running very well")
})

