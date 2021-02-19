const db = require('../../data/dbConfig');

const getProjects = () => {
    return db('projects');
};

const getProject = (project_id) => {
    return db('projects')
        .where({ project_id })
        .first();
};

const insertProject = (project) => {
    return db('projects')
        .insert(project)
        .then(id => {
            return db('projects')
                .where('project_id', id)
                .first();
        })
};

const deleteProject = (project_id) => {
    return db('projects')
        .where({ project_id })
        .del();
};

const updateProject = (project_id, changes) => {
    return db('projects')
        .where({ project_id })
        .update(changes)
        .then(changed => {
            return db('projects')
                .where({ project_id: project_id });
        });
};

module.exports = {
    getProjects,
    getProject,
    insertProject,
    deleteProject,
    updateProject
};