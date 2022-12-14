/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customer_users", (table) => {
        table.increments();
        table.string("facebook_id");
        table.string("google_id");
        table.string("email");
        table.string("password");
        table.string("name");
        table.integer("phone_no");
        table.string("address");
        table.string("cypto_no");
        table.binary("image_data");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("customer_users");
};
