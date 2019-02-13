'use strict';

module.exports = {
    method: 'get',
    path: '/users',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            return userService.getAllUsers(); 
        },
        tags : ['api']
    },
   
};
