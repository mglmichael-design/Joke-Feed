const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Something went Wrong!", error: err}))
}
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went Wrong!", error: err}))
}
module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id: req.params._id})
            .then(res.json({message: "Your joke was not funny!"}))
            .catch(err => res.json({message: "Something went Wrong!", error: err}))
}
module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    }, {runValidators: true})
            .then(allJokes => res.json({joke: allJokes}))
            .catch(err => res.json({message: "Something went Wrong!", error: err}))
}

// random joke
module.exports.randomJoke = (req, res) => {
    // find my array of jokes
    // get a random index number from it
    // pass the joke at the random index number along
    // catch => throw an error
    Joke.find()
        .then(jokes => {
            let rand = Math.floor(Math.random()*jokes.length);
            res.json({joke: jokes[rand]});
        })
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}


