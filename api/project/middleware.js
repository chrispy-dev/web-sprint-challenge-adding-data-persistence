const { getProject } = require('./model');

const validateProject = (req, res, next) => {
    const { project_name } = req.body;

    if (project_name) {
        next();
    } else {
        res.status(400).json({ error: "Project requires a name!" });
    };
};

const validateProjectID = (req, res, next) => {
    const { project_id } = req.params;

    getProject(project_id)
        .then(project => {
            if(project) {
                req.project = project;
                next();
            } else {
                res.status(404).json({ error: "Project with that ID not found." });
            };
        });
};

module.exports = {
    validateProject,
    validateProjectID
};