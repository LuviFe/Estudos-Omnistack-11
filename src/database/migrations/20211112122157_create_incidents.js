
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
    table.increments(); //Creates primary keys for each incidents
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs'); //Identify that the id is from another table 
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
