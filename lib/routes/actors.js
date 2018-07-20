const router = require('express').Router();
const Actor = require('../models/actor');

module.exports = router

    .post('/', (req, res, next) => {
        Actor.create(req.body)
            .then(actor => res.json(actor))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Actor.find(req.query)
            .lean()
            .select()
            .then(tours => res.json(tours))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Actor.find(req.query)
            .lean()
            .select()
            .then(tours => res.json(tours))
            .catch(next);
    });
