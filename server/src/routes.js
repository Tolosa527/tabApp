const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicies.register,
    AuthenticationController.register)
}
