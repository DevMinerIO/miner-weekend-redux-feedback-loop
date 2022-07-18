const express = require('express');
const { DatabaseError } = require('pg');
const router = express.Router();

const pool = require('../modules/pool');

// Get all feedback. Limit 1 desc so it is the most recent feedback that is shown.
router.get('/', (req, res) => {
    let queryText = 'SELECT feeling, understanding, support, comments FROM "feedback" ORDER BY "id" DESC LIMIT 1;';
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error getting Feedback in feedback.router.js', error);
            res.sendStatus(500);
        });
});

// post route. / infers you are talking about your server.js app.use()
router.post('/', (req, res) => {
    let newFeedback = req.body;
    // added variables in case I wanted to make my pool.query look nicer... didnt use
    let feeling = newFeedback.feeling;
    let understanding = newFeedback.understanding;
    let support = newFeedback.support;
    let comment = newFeedback.comments;
    console.log(`Adding feedback`, newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
    // casting to a number before sending to the Database to ensure data types are accepted
    pool.query(queryText, [Number(newFeedback.feeling), Number(newFeedback.understanding),
    Number(newFeedback.support), newFeedback.comments])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
});

module.exports = router;