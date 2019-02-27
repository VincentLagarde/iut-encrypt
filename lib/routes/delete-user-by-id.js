'use strict';
const Joi = require('joi');
const Boom = require('boom');
const UserSchema = require('../schemas/user');

module.exports = {
    method: 'delete',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            let userFound = await userService.deleteUserById(request.params.id);

            if(userFound){
                return h.response().code(204);
            }else{
                return Boom.notFound('utilisateur inexistant');
            }
        },
        validate : {
          params : {
            id : Joi.number()
          },
        },
        tags : ['api']
    },
   
};
