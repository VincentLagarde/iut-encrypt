'use strict';
const UserSchema = require('../schemas/user');
const Boom = require('boom');

module.exports = {
    method: 'post',
    path: '/user',
    options: {
        handler: async (request, h) => {
          const { userService } = request.services();
         
          const user = await userService.createUser(request.payload);

          if(user){
            return h.response(user).code(201)
          }else{
            return Boom.notFound("Utilisateur n'a pas pu être créer");
          }
         
        },
        validate : {
          payload : { UserSchema }
        },
        tags : ['api']
    },  
};
