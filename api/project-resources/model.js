const db = require('../../data/dbConfig');

const getPRs = () => {
    return db('project_resources');
};

const getPR = (project_id) => {
    return db('projects')
        .where({ project_id })
        .first()
        .then(project => {
            return db('project_resources as pr')
                .join('resources as r', 'pr.resource_id', 'r.resource_id')
                .where('pr.project_id', project_id)
                .select('r.resource_id as id', 'r.resource_name as name', 'r.resource_description as description')
                .then(resources => {
                    return db('tasks as t')
                        .where('t.project_id', project_id)
                        .select('t.task_id as id', 't.task_description as description', 't.task_notes as notes', 't.task_completed')
                        .then(tasks => {
                            return {
                                id: project_id,
                                name: project.project_name,
                                tasks: tasks,
                                resources: resources
                            }
                        })
                });
        });
};

const createPR = (pr) => {
    return db('project_resources')
        .insert(pr);
};

const deletePR = (project_resource_id) => {
    return db('project_resources')
        .where({ project_resource_id })
        .del();
};

module.exports = {
    getPRs,
    getPR,
    createPR,
    deletePR
};