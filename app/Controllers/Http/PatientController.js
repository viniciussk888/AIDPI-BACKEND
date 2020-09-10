'use strict'

const Patient = use('App/Models/Patient')
const Vaccine = use('App/Models/Vaccine')
const Database = use('Database')

const arrayVaccines = [
  {
    "name": "BCG",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Hep B",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Penta¹",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VIP¹",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VORH¹",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "PNM10¹",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "MNG C¹",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Penta²",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VIP²",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VORH²",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "PNM10²",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "MNG C²",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Penta³",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VIP³",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Gripe",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "FA",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Hep A",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Tríplice V",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "Tetra V",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "MNG C(R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "PNM10(R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VOP(1º R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "DTP(1º R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "VOP(2º R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  },
  {
    "name": "DTP(2º R)",
    "situation": "NÃO",
    "date": "",
    "responsible": ""
  }
]

class PatientController {
  async index({ }) {
    const patient = await Patient.all();

    return patient
  }
  async store({ request }) {
    const data = request.all()

    const trx = await Database.beginTransaction()

    const patient = await Patient.create(data, trx)
    await Vaccine.create({
      name: patient.name,
      patient_sus: patient.sus,
      vaccine_list: JSON.stringify(arrayVaccines),
    }, trx)

    await trx.commit()

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
