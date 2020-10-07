const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

//reads the model and renders it all to the page
router.get("/", function (req, res) {
    burger.read()
    .then(data => {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
    .catch(err => {
        console.log(err);
    });
});


//allows for the creation of a new object(burger)
router.post("/api/burgers", function (req, res) {
    //gets the columns
    var cols = Object.entries(req.body).map(e => e[0]);
    //gets the values
    var vals = Object.entries(req.body).map(e => e[1]); 

    burger.create(cols, vals)
    .then(results => {
        console.log(results);
        res.json({id: results.insertId});
    })
    .catch(err => {
        console.log(err);
    });
});

//allows for users to update object(burger)
router.put("/api/burgers/:id", function (req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition)
    .then(result => {
        if (result.channgedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
    .catch(err => {
        console.log(err);
    });
});


//allows for user to delete object(burger)
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition)
    .then(result => {
        if (result.affectedRows ==0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    })
    .catch(err => {
        console.log(err);
    });
});

//Export routes for server.js to use
module.exports = router;

