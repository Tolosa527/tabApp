const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }
    const { error, value } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error:
            `
            <br>
              You must provide a valid email address
            <br>
            `
          })
          break
        case 'password':
          res.status(400).send({
            error:
            `
            <br>
              Please enter a valid password
            <br>
            `
          })
          break
        default:
          res.status(400).send({
            error:
              `
              <br>
                Invalid resgistration information
              <br>
              `
          })
      }
    } else {
      next()
    }
  }
}
