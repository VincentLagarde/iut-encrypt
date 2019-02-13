'use strict';
const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            return userService.getUserById(request.params.id);
        },
        validate : {
          params : {
            id : Joi.number()
          } 
        },
        tags : ['api']
    },
   
};
