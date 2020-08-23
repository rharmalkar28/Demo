const express = require('express');
const router = express.Router();

let i = 1;

const feedbacks = {};

const feedback = {
    comments: '',
    tags: [],
    rating: 5
}


router.put('/updateFeedback/:id', (req, res) => {
    console.log('for update', req.body);
    if (feedbacks[req.params.id]) {
        feedbacks[req.params.id] = req.body;
        res.send(feedbacks[req.params.id]);
    }
});

router.post('/addFeedback', (req, res) => {
    console.log(req.body);
    feedbacks[i] = {
        ...feedback,
        ...req.body,
        id: i
    };
    i++;
    res.send(feedbacks[i - 1]);
});

router.get('/fetchfeedback', (req, res) => {
    return res.send(Object.values(feedbacks));
});

module.exports = router;

