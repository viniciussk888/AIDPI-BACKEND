'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceStationSchema extends Schema {
  up() {
    this.create('service_stations', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.string('district', 254).notNullable()
      table.string('adress', 254).notNullable()
      table.string('city', 254).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('service_stations')
  }
}

module.exports = ServiceStationSchema
