const express = require('express');
const db = require('./model');
const { validateProject, validateProjectID } = require('./middleware');

const router = express.Router();

router.post('/', validateProject, (req, res) => {
    db.insertProject(req.body)
        .then(project => res.status(201).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:project_id', validateProjectID, (req, res) => {
    db.deleteProject(req.params.project_id)
        .then(deleted => res.status(202).json(deleted))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.put('/:project_id', validateProjectID, (req, res) => {
    db.updateProject(req.params.project_id, req.body)
        .then(project => res.status(202).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;