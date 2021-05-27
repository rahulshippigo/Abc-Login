const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var config = require('./config/config.json');
app.set('secret', config.secret);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect("mongodb://localhost/test", (err, data) => {
    if (err)
        console.log("Databse not connected");
    else
        console.log(err)
    console.log("Database Connected");
})

var routes = require('./routes/routes');
app.use('/api', routes); 

app.listen(4000, () => {
    console.log("Server Running");
});