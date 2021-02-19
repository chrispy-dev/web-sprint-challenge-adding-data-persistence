const express = require('express');
const db = require('./model');
const { validateResource, validateResourceID } = require('./middleware');

const router = express.Router();

router.post('/', validateResource, (req, res) => {
    db.insertResource(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/', (req, res) => {
    db.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:resource_id', validateResourceID, (req, res) => {
    db.deleteResource(req.params.resource_id)
        .then(deleted => res.status(202).json(deleted))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.put('/:resource_id', validateResourceID, (req, res) => {
    db.updateResource(req.params.resource_id, req.body)
        .then(resource => res.status(202).json(resource))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;