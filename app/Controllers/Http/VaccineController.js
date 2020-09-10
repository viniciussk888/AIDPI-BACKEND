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
    let vaccine = await Vaccine.findOrFail(params.id)
    const data = request.all()

    const arrayVacinnes = JSON.parse(vaccine.vaccine_list)

    try {
      let count = 0;
      arrayVacinnes.map(item => {
        if (item.name === data.name) {
          arrayVacinnes[count].situation = data.situation
          arrayVacinnes[count].date = data.date
          arrayVacinnes[count].responsible = data.responsible
        }
        count++
      })

      vaccine.vaccine_list = JSON.stringify(arrayVacinnes)

      await vaccine.save()

    } catch (error) {
      console.log(error)
    }

    return vaccine
  }
}

module.exports = VaccineController
