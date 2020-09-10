'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {
  vacinnes() {
    return this.belongsTo('App/Models/Vaccine')
  }
}

module.exports = Patient
