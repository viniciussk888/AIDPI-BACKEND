'use strict'

const Model = use('Model')

class Patient extends Model {
  vacinnes() {
    return this.belongsTo('App/Models/Vaccine')
  }
}

module.exports = Patient
