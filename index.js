/*
-----------------------------------------------------------------------------
Name: index.js
Author: @NCiavone
Date Created: 12/2/21
Purpose: The js landing page for the server.
Notes:
    -The noted from this come from fullstack.js from Prof Sen and his 
    recording from Nov. 18th
-----------------------------------------------------------------------------
*/


const express = require('express');

const app = new express();


//Middleware Function init
//Body Parser!
app.use(express.json());
app.use(express.urlencoded({extended:true})); //to parse the HTML form

//Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//route <url the client will use and how the server will repons to that url>
app.get('/',(req,res) => {
    res.render('index');
});


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log('Server started on PORT NO. ${PORT}')});


