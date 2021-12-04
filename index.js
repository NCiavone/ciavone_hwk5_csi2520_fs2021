const express = require('express');

const app = new express();

//route <url the client will use and how the server will repons to that url>
app.get('/',(req,res) => {
    res.send('Hello from Homework 5');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('Server started on PORT NO. ${PORT}')});