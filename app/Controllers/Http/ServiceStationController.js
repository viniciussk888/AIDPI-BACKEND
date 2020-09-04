'use strict'

const ServiceStation = use('App/Models/ServiceStation')

class ServiceStationController {
  async index({ }) {
    const serviceStation = await ServiceStation.all();

    return serviceStation
  }
  async store({ request }) {
    const data = request.all()
    const serviceStation = await ServiceStation.create(data)
    return serviceStation;
  }
  async destroy({ params }) {
    const serviceStation = await ServiceStation.findOrFail(params.id)

    await serviceStation.delete()
  }
}

module.exports = ServiceStationController
