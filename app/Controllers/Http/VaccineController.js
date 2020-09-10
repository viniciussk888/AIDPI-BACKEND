'use strict'

const Vaccine = use('App/Models/Vaccine')

class VaccineController {

  async index({ }) {
    const vaccine = await Vaccine.all();

    return vaccine
  }
  async show({ params, request }) {
    //const { sus } = request.all()
    const vaccine = await Vaccine.query()
      .where('patient_sus', params.id)
      .fetch()
    return vaccine
  }
  async update({ params, request }) {
    const vaccine = await Vaccine.findOrFail(params.id)
    const data = request.all()

    vaccine.merge(data)

    await vaccine.save()

    return vaccine
  }
}

module.exports = VaccineController
