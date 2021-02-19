const db = require('../../data/dbConfig');

const getAllTasks = () => {
    return db('tasks');
};

const getTasks = (project_id) => {
    return db('projects')
        .where({ project_id })
        .first()
        .select('project_id as id', 'project_name as name', 'project_description as description', `project_completed as completed`)
        .then(project => {
            return db('tasks')
                .where({ project_id })
                .select('task_id as id', 'task_description as description', 'task_notes as notes', 'task_completed as completed')
                .then(tasks => {
                    return {
                        ...project,
                        tasks: tasks
                    };
                });
        });
};

const getTask = (task_id) => {
    return db('tasks')
        .where({ task_id: task_id })
        .first();
};

const insertTask = (task) => {
    return db('tasks')
        .insert(task)
        .then(task_id => {
            return db('tasks')
                .where({ task_id: task_id })
                .first();
        });
};

const updateTask = (task_id, changes) => {
    return db('tasks')
        .where({ task_id: task_id })
        .update(changes)
        .then(changed => {
            return db('tasks')
                .where({ task_id: task_id });
        });
};

const deleteTask = (task_id) => {
    return db('tasks')
        .where({ task_id: task_id })
        .del();
};

module.exports = {
    getAllTasks,
    getTasks,
    getTask,
    insertTask,
    updateTask,
    deleteTask
};