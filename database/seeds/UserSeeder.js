'use strict'

const User = use('App/Models/User')

const Factory = use('Factory')

class UserSeeder {
  async run() {
    await User.create({
      name: 'Alberto Vinicius Martins Rocha',
      username: 'viniciussk888',
      password: 'lokomania',
      email: 'vinicius.cross07@gmail.com',
      phone: '99981777152',
      city: 'Balsas',
      district: 'Setor industrial',
      adress: 'Rua Ceara',
      office: 'Enfermeiro(a)',
      serviceStation: 'UPA',
      aidpi: true,
      admin: true,
      active: false
    })
  }
}

module.exports = UserSeeder
