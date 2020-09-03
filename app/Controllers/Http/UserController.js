'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ }) {
    const user = await User.all();

    return user
  }
  async store({ request }) {
    const data = request.all()
    const user = await User.create(data)
    return user;
  }
  async show({ params }) {
    const user = await User.findOrFail(params.id)
    return user
  }
  async update({ params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.all()

    user.merge(data)

    await user.save()

    return user
  }
  async destroy({ params }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UserController
