const express = require('express');
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

module.exports = router;