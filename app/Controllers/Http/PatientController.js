'use strict'

const Patient = use('App/Models/Patient')
const Database = use('Database')

class PatientController {
  async index({ }) {
    const patient = await Patient.all();

    return patient
  }
  async store({ request }) {
    const data = request.all()
    const patient = await Patient.create(data)
    return patient;
  }
  async show({ params }) {
    const patient = await Patient.findOrFail(params.id)
    return patient
  }
  async search({ params, request }) {
    const { searchPatientName } = request.all()
    const patient = await Database.table('patients').where('name', 'like', '%' + searchPatientName + '%')
    return patient;
  }
  async update({ params, request }) {
    const patient = await Patient.findOrFail(params.id)
    const data = request.all()

    patient.merge(data)

    await patient.save()

    return patient
  }
  async destroy({ params }) {
    const patient = await Patient.findOrFail(params.id)

    await patient.delete()
  }
}

module.exports = PatientController
