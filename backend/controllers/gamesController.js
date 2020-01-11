const GamesModel = require("../models/games");

const gamesController = {
  createGame: (req, res) => {
    if (!req.body)
      res.status(400).json({ message: "Game name is Required!" });
    const newGame = new GamesModel(req.body);
    newGame
      .save()
      .then(result => {
        res.status(201).json({ result });
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  },

  getOneGame: (req, res) => {
    const id = req.params.id;
    if (!id)
      res.status(400).json({ message: "Game with the given id is not Found!" });
    GamesModel.findById({ _id: id })
      .then(game => res.status(200).json({ game }))
      .catch(err => res.status(500).json({ error: err.message }));
  },

  getAllGames: (req, res) => {
    GamesModel.find()
      .then(games => {
        if (games) res.status(200).json({ games });
        res.status(404).json({ message: "No Games Found!" });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  },

  deleteGame: (req, res) => {
    const id = req.params.id;
    if (!id) res.status(404).json({ message: "Game not Found!" });
    GamesModel.findOneAndDelete({ _id: id })
      .then(data => res.status(204).json({message: "deleted"}))
      .catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  },

  updateGame: (req, res) => {
    const id = req.params.id;
    if (!id) res.status(404).json({ message: "Game not Found!" });
    GamesModel.findOneAndUpdate({_id: id}, { $set: req.body}, {new: true}, (err, game) => {
      if(err) res.status(400).json({error: err.message})
      res.status(201).json({game})
    })
  }
};

module.exports = gamesController;
