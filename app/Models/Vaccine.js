'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vaccine extends Model {
  patient() {
    return this.belongsTo('App/Models/Patient')
  }
}

module.exports = Vaccine
