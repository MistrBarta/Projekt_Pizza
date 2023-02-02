const db = require("../helpers/db");

exports.getAllSkin = (req, res) => {
  db.query("SELECT * FROM skin;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Skin found",
      result,
    });
  });
};

exports.getSkinById = (req, res) => {
  db.query(
    "SELECT * FROM skin WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Skin found",
        result,
      });
    }
  );
};

exports.postSkin = (req, res) => {
  db.query(
    "INSERT INTO skin ( weapon, name, rarity, float, image) VALUES (?, ?, ?, ?, ?);",
    [req.body.weapon, req.body.name, req.body.rarity, req.body.float, req.body.image],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Skin created",
        result,
      });
    }
  );
};

exports.putSkin = (req, res) => {
  db.query(
    "UPDATE skin SET weapon = ?, name = ?, rarity = ?, float = ?, image = ?, WHERE id = ?;",
    [req.body.weapon, req.body.name, req.body.rarity, req.body.float, req.body.image],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Skin updated",
        result,
      });
    }
  );
};

exports.deleteSkin = (req, res) => {
  db.query(
    "DELETE FROM skin WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Skin deleted",
        result,
      });
    }
  );
};
