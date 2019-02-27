'use strict';
const Boom = require('boom');


module.exports = {
    method: 'post',
    path: '/users/generate',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            let userFound = await userService.generateUsers(100);

            if(userFound){
                return h.response(userFound).code(201);
            }else{
                return Boom.notFound('utilisateur inexistant');
            }
        },
        tags : ['api']
    },
   
};
