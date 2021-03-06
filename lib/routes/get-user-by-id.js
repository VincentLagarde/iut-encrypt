'use strict';
const Joi = require('joi');
const Boom = require('boom');

module.exports = {
    method: 'get',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            let userFound = await userService.getUserById(request.params.id);

            if(userFound){
                return userFound;
            }else{
                return Boom.notFound('utilisateur inexistant');
            }
        },
        validate : {
          params : {
            id : Joi.number()
          } 
        },
        tags : ['api']
    },
   
};
