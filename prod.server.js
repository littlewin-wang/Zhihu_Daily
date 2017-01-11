var express = require('express')
var config = require('./config')
var cors = require('cors')

var port = process.env.PORT || config.build.port

var app = express()

app.use(cors())

app.use(require('connect-history-api-fallback')())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
})
