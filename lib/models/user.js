'use strict';

const { Model } = require('schwifty');
const { UserSchema } = require('../schemas/user');

module.exports = class User extends Model {

  static get tableName() {
    return 'users';
  }

  static get joiSchema() {
    return UserSchema;
  }
}