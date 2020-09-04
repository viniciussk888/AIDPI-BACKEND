'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up() {
    this.create('patients', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('color', 10).notNullable()
      table.string('sex', 10).notNullable()
      table.string('typeBlood', 10)
      table.integer('weight', 10)
      table.integer('length', 10)
      table.string('tax', 254)
      table.string('sus', 20).notNullable().unique()
      table.string('cpf', 20).notNullable().unique()
      table.string('rg', 20).unique()
      table.string('birthDate', 20).notNullable()
      table.string('phone', 20)
      table.string('adress', 254)
      table.string('district', 254)
      table.string('city', 254)
      table.string('number', 20)
      table.string('motherName', 254).notNullable()
      table.string('fatherName', 254)
      table.string('notes', 1000)
      table.boolean('specialPatient')
      table.boolean('active')
      table.timestamps()
    })
  }

  down() {
    this.drop('patients')
  }
}

module.exports = PatientSchema
