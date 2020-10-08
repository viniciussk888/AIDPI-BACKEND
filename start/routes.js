'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello AIDPI' }
})
//NO AUTH ROUTES
Route.post('sessions', 'SessionController.store');
//AUTH ROUTES
Route.group(() => {
  //users
  Route.resource('users', 'UserController').apiOnly();
  //patient
  Route.resource('patients', 'PatientController').apiOnly();
  Route.post('searchpatients', 'PatientController.search');
  Route.post('searchwithsus', 'PatientController.searchWithSus');
  //dashboard
  Route.get('dashboard', 'DashboardController.index');
  //service station
  Route.resource('servicesstations', 'ServiceStationController').apiOnly();
  //vaccines
  Route.resource('vaccines', 'VaccineController').apiOnly();
}).middleware(['auth'])
