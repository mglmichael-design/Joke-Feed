const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "You need to setup your Joke!"],
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "So....... What is the Punchline?!?!?!?!?!"],
        minlength:[3, "Punchline must be at least 3 characters"]
    }
    
}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
