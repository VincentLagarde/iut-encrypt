'use strict';
const UserSchema = require('../schemas/user');

module.exports = {
    method: 'post',
    path: '/user',
    options: {
        handler: async (request, h) => {
          const { userService } = request.services();
          return userService.createUser(request.payload); 
        },
        validate : {
          payload : { UserSchema }
        },
        tags : ['api']
    },  
};
