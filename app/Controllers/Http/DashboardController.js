'use strict'

const Database = use('Database')

class DashboardController {
  async index({ }) {
    const patientsCount = await Database
      .from('patients')
      .count('* as totalPatients')

    return patientsCount
  }
}

module.exports = DashboardController
