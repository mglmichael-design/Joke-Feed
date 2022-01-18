const JokeController = require("../controller/joke.controller");

module.exports = app => {
    
    // random
    app.get("/api/jokes/random", JokeController.randomJoke);

    
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findOneJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);

    
}