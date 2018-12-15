const Joi = require('joi');

const schema = Joi.object().keys({
    login: Joi.string().required(),
    password: Joi.string().required().min(8),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    firstname : Joi.string().required(),
    lastname :  Joi.string().required(),
    company : Joi.string(),
    function : Joi.string()
});

module.exports = schema;