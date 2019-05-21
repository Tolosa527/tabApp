const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', function (req, res) {
  res.send({
    message: `Hello ${req.body.email} your user was created!`
  })
})
app.listen(process.env.PORT || 8081, console.log('Im listen port 8081'))
