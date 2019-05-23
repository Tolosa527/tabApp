const { User } = require('../models')

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
      const user = User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: `User dosen't exist`
        })
      }
      const isPasswordValid = password === User.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Password invalid'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use.'
      })
    }
  }
}
