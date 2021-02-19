const { get } = require('../project/router');
const { getTask } = require('./model');

const validateTask = (req, res, next) => {
    const { task_description, project_id } = req.body;

    if(task_description && project_id) {
        next();
    } else {
        res.status(400).json({ error: "Task needs to have a description and belong to a project!" });
    };
};

const validateTaskID = (req, res, next) => {
    const { task_id } = req.params;

    getTask(task_id)
        .then(task => {
            if(task) {
                req.task = task;
                next();
            } else {
                res.status(404).json({ error: "Cannot find Task with that ID." });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

module.exports = {
    validateTask,
    validateTaskID
};