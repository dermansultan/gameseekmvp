const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;




// This section will help you get a single record by id
recordRoutes.route("/list").get(function (req, res) {
  let db_connect = dbo.getDb("gameseek");
  let myquery = { _id: ObjectId("625b598b71c4d35ad8de841a")};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/").post(function (req, response) {
  let db_connect = dbo.getDb("gameseek");
  let myquery = { _id: ObjectId( "625b598b71c4d35ad8de841a" )};
  let newList = { $push: { 'list': req.query.id } }
  db_connect.collection("users").update(myquery, newList, function (err, res) {
    if (err) throw err;
    console.log('Game added')
    response.json(res);
  });
});

// This section will help you delete a record
recordRoutes.route("/list").delete((req, response) => {
  let db_connect = dbo.getDb("gameseek");
  let myquery = { _id: ObjectId( "625b598b71c4d35ad8de841a" )};
  let newList = { $pull: { 'list': req.query.id } }
  db_connect.collection("users").update(myquery, newList, function (err, obj) {
    if (err) throw err;
    console.log('Game deleted')
    response.json(obj);
  });
});

module.exports = recordRoutes;