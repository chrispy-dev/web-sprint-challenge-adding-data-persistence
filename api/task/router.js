const express = require('express');
const db = require('./model');
const { validateProjectID } = require('../project/middleware');
const { validateTask, validateTaskID } = require('./middleware');

const router = express.Router();

router.get('/', (req, res) => {
    db.getAllTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/project/:project_id', validateProjectID, (req, res) => {
    db.getTasks(req.params.project_id)
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', validateTask, (req, res) => {
    db.insertTask(req.body)
        .then(task => res.status(202).json(task))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.put('/:task_id', validateTaskID, (req, res) => {
    db.updateTask(req.params.task_id, req.body)
        .then(task => res.status(202).json(task))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:task_id', validateTaskID, (req, res) => {
    db.deleteTask(req.params.task_id)
        .then(deleted => res.status(202).json(deleted))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;