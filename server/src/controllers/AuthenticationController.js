const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwsSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: `User dosen't exist`
        })
      }
      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Password invalid'
        })
      }
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwsSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Internal server error'
      })
    }
  }
}
