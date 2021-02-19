const express = require('express');
const db = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getPRs()
        .then(prs => res.status(200).json(prs))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:project_id', (req, res) => {
    db.getPR(req.params.project_id)
        .then(prs => res.status(200).json(prs))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res) => {
    db.createPR(req.body)
        .then(id => res.status(200).json(id))
});

router.delete('/:project_resource_id', (req, res) => {
    db.deletePR(req.params.project_resource_id)
        .then(deleted => res.status(202).json(deleted))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;