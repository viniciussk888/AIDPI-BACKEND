'use strict'

const User = use('App/Models/User')

class SessionController {
  async store({ request, response, auth }) {
    const { username, password } = request.all()

    const token = await auth.attempt(username, password)

    const user = await User.findByOrFail('username', username)


    return ([token,
      {
        "id": user.id,
        "username": user.username,
        "name": user.name,
        "office": user.office,
        "serviceStation": user.serviceStation,
        "aidpi": user.aidpi,
        "admin": user.admin,
        "active": user.active
      }])
  }
}

module.exports = SessionController
