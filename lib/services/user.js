'use strict';

const { Service } = require('schmervice');


module.exports = class UserService extends Service {

  async initialize(){ // CALLED ON SERVER INITIALIZATION (onPreStart)

    // set up stuff here
    this.users = [];
  }

  async teardown(){ // CALLED ON SERVER STOP (OnPostStop)

   // tear down stuff here
  }

  hello(user){
    return `Hello ${user.firstName}`;
  }


  getAllUsers(){
    const { User } = this.server.models();
    return User.query();
  }

  getUserById(id){
    const { User } = this.server.models();
    return User.query().findById(id);
  }

  createUser(payload){
    const { User } = this.server.models();
    const user = payload.UserSchema;
    return User.query().insert(user);
  }

  add(user){
    this.users.push(user);
  }

  

}