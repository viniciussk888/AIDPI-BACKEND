'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello AIDPI' }
})
//NO AUTH ROUTES
Route.post('sessions', 'SessionController.store');
//AUTH ROUTES
Route.group(() => {
  Route.resource('users', 'UserController').apiOnly();
}).middleware(['auth'])
