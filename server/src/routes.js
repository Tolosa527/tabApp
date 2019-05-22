module.exports = (app) => {
  app.post('/register', function (req, res) {
    res.send({
      message: `Hello ${req.body.email} your user was created!`
    })
  })
}
