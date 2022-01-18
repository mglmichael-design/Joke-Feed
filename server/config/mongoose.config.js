const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Found the Mongoose!"))
    .catch(()=> console.log("Where did the mongoose?!", err))