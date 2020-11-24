'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AidpiSchema extends Schema {
  up () {
    this.create('aidpis', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('aidpis')
  }
}

module.exports = AidpiSchema
