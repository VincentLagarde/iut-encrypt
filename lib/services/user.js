'use strict';

const { Service } = require('schmervice');
const faker = require('faker');

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

  updateUserById(id, payload){
    const { User } = this.server.models();
    const user = payload.UserSchema;
    return User.query().findById(id).update(user);
  }

  deleteUserById(id){
    const { User } = this.server.models();
    return User.query().findById(id).delete();
  }

  async generateUsers(nbUsers){
    let usersCrees = [];

    for(let i=0; i < nbUsers; i++){
      let fakerUser = {
        "UserSchema":{
          "login":faker.internet.userName(),
          "password":faker.internet.password(),
          "email":faker.internet.email(),
          "firstname":faker.name.firstName(),
          "lastname":faker.name.lastName(),
          "company":faker.company.companyName(),
          "function":faker.name.jobTitle()
        }
      } 

      let userAAjouter = await this.createUser(fakerUser);
      usersCrees.push(userAAjouter);
    }
    return usersCrees;
  }


  add(user){
    this.users.push(user);
  }
}