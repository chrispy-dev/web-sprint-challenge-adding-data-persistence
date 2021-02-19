const db = require('../../data/dbConfig');

const getResources = () => {
    return db('resources');
};

const getResource = (resource_id) => {
    return db('resources')
        .where({ resource_id })
        .first();
};

const insertResource = (resource) => {
    return db('resources')
        .insert(resource)
        .then(resource_id => {
            return db('resources')
                .where({ resource_id })
                .first();
        })
};

const deleteResource = (resource_id) => {
    return db('resources')
        .where({ resource_id })
        .del();
};

const updateResource = (resource_id, changes) => {
    return db('resources')
        .where({ resource_id })
        .update(changes)
        .then(changed => {
            return db('resources')
                .where({ resource_id });
        });
};

module.exports = {
    getResources,
    getResource,
    insertResource,
    deleteResource,
    updateResource
};