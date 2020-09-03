'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('phone', 254)
      table.string('city', 254)
      table.string('district', 254)
      table.string('adress', 254)
      table.string('office', 254).notNullable()
      table.string('serviceStation', 254).notNullable()
      table.boolean('aidpi').notNullable()
      table.boolean('admin').notNullable()
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
