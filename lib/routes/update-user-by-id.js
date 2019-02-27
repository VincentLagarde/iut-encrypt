'use strict';
const Joi = require('joi');
const Boom = require('boom');
const UserSchema = require('../schemas/user');

module.exports = {
    method: 'put',
    path: '/user/{id}',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            let userFound = await userService.updateUserById(request.params.id, request.payload);

            if(userFound){
                return h.response(userFound).code(201);
            }else{
                return Boom.notFound('utilisateur inexistant');
            }
        },
        validate : {
          params : {
            id : Joi.number()
          },
          payload : { UserSchema }
        },
        tags : ['api']
    },
   
};
