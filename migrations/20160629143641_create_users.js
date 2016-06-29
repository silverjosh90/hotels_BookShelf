
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email');
    table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('books', function (table) {
//     table.increments(); // set up Primary Key ID field
//     table.string('title');
//     table.string('author');
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('books')
// };
