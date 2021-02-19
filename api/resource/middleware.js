const { getResource } = require('./model');

const validateResource = (req, res, next) => {
    const { resource_name } = req.body;

    if (resource_name) {
        next();
    } else {
        res.status(400).json({ error: "Resource requires a name!" });
    };
};

const validateResourceID = (req, res, next) => {
    const { resource_id } = req.params;

    getResource(resource_id)
        .then(resource => {
            if(resource) {
                req.resource = resource;
                next();
            } else {
                res.status(404).json({ error: "Resource with that ID not found." });
            };
        });
};

module.exports = {
    validateResource,
    validateResourceID
};