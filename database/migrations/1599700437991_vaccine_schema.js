'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VaccineSchema extends Schema {
  up() {
    this.create('vaccines', (table) => {
      table.increments()
      table.string('name', 255).notNullable(),
        table.string('patient_sus', 20)
          .references('sus')
          .inTable('patients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          .notNullable()
          .unique(),
        table.json('vaccine_list')
      table.timestamps()
    })
  }

  down() {
    this.drop('vaccines')
  }
}

module.exports = VaccineSchema
