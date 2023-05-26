const db = require("../helpers/db");

exports.getAllPizzas = (req, res) => {
  db.query("SELECT * FROM pizzas;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Pizzas found",
      result,
    });
  });
};

exports.getPizzaById = (req, res) => {
  db.query(
    "SELECT * FROM pizzas WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Pizza found",
        result,
      });
    }
  );
};

exports.postPizza = (req, res) => {
  db.query(
    "INSERT INTO pizzas (name, price, ingredients) VALUES (?, ?, ?);",
    [req.body.name, req.body.price, req.body.ingredients],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Pizza created",
        result,
      });
    }
  );
};

exports.putPizza = (req, res) => {
  db.query(
    "UPDATE pizzas SET name = ?, price = ?, ingredients = ? WHERE id = ?;",
    [req.body.name, req.body.price, req.body.ingredients, req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Pizza updated",
        result,
      });
    }
  );
};

exports.deletePizza = (req, res) => {
  db.query(
    "DELETE FROM pizzas WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Pizza deleted",
        result,
      });
    }
  );
};
