const express = require("express");
const gamesController = require("../controllers/gamesController");

const gameRouter = new express.Router();

gameRouter.get("/api/games", gamesController.getAllGames);
gameRouter.get("/api/games/:id", gamesController.getOneGame);
gameRouter.post("/api/games", gamesController.createGame);
gameRouter.put("/api/games/:id", gamesController.updateGame);
gameRouter.delete("/api/games/:id", gamesController.deleteGame);

module.exports = gameRouter;
