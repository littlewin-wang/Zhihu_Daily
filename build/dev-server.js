require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

const webpush = require('web-push')

const publicVapidKey = 'BH6KXF52SefsDGaB4ao9lvfdqGgkiDo4uTVwFyjkIy58-MxwhdEW_1Dbr6qgAQqsdCl51HSvAqiqNcJ1HT2r-D8'
const privateVapidKey = 'utFHLTZ4KtMDOhK1_aetCBryJLFVDLpHx7WEZMxS2f0'

// Replace with your email
webpush.setVapidDetails('mailto:littlewin.wang@sky-cloud.net', publicVapidKey, privateVapidKey)

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use(require('body-parser').json())
app.post('/subscribe', (req, res) => {
  const subscription = req.body
  res.status(201).json({})
  const payload = JSON.stringify({ title: 'Zhihu_Daily' })

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack)
  })
})

app.get('/sync', (req, res) => {
  console.log(`Hello ${req.query.name}, I have received your msg`)

  res.status(200).json({
    status: 0
  })
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  // if (process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
})
