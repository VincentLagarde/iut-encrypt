'use strict';


module.exports = {
    method: 'get',
    path: '/user/add',
    options: {
        handler: async (request, h) => {
            const { userService } = request.services();
            return userService.hello({ firstName: 'John'});
            
        },
        tags : ['api']
    },
   
};
