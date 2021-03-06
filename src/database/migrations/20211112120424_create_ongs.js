
exports.up = function(knex) { //Create tables (what u want to be made)
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) { //In case of an error, to the delete tables
  return knex.schema.dropTable('ongs');
};
