
exports.up = function(knex, Promise) {
  console.log('exports up')
 
    //Si la table users n'existe pas
    return knex.schema.hasTable('users').then(function(exists){
      if(!exists){
        return knex.schema.createTable('users', function (table) {
          table.increments('id').primary();
          table.string('login');
          table.string('password');
          table.string('email').unique();
          table.string('firstname');
          table.string('lastname');
          table.string('company');
          table.string('function');
        })
      }
    }).then(() =>{
       return knex('users').insert({
        login : 'Patate',
        password : 'feuille',
        email : 'tuyau1@gmail.com',
        firstname : 'Vincent',
        lastname : 'Lagarde',
        company : 'Thera Soft',
        function : 'dev'
      })
    })
  
    
};

exports.down = function(knex, Promise) {
  
};
