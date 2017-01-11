var http = require("http")
var server = http.createServer()
var url = require("url")
var querystring = require("querystring")

server.on('request', function(req, res) {
  var urlOption = url.parse(req.url)
  var pathName = urlOption.pathname
  switch (pathName) {
    case '/news':
      var request = http.request('http://news-at.zhihu.com/api/4/news/latest')
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      });
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      });
      request.end()
      break

    case '/newsById':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/4/news/' + id)
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        });
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      })
      request.end()
      break

    case '/newsByDate':
      var query = querystring.parse(urlOption.query)
      var time = ~~query.time
      var request = http.request('http://news.at.zhihu.com/api/4/news/before/' + time.toString())
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers);
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      })
      request.end()
      break

    case '/newsInfo':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/4/story-extra/' + id)
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers);
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err });
      })
      request.end()
      break

    case '/topics':
      var request = http.request('http://news-at.zhihu.com/api/4/themes')
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      });
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      })
      request.end()
      break

    case '/topicById':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/4/theme/' + id)
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        });
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        });
        res.end({ "error": err })
      });
      request.end()
      break

    case '/sections':
      var request = http.request('http://news-at.zhihu.com/api/3/sections')
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      });
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      })
      request.end()
      break

    case '/sectionById':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/3/section/' + id)
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8')
        response.on('data', function(chunk) {
          c += chunk
        });
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers)
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        });
        res.end({ "error": err })
      });
      request.end()
      break

    case '/longComments':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/4/story/' + id + '/long-comments')
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers);
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      });
      request.end()
      break

    case '/shortComments':
      var query = querystring.parse(urlOption.query)
      var id = query.id
      var request = http.request('http://news-at.zhihu.com/api/4/story/' + id + '/short-comments')
      request.on('response', function(response) {
        var c = ""
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
          c += chunk
        })
        response.on('end', function() {
          response.headers['Access-Control-Allow-Origin'] = '*'
          res.writeHead(200, response.headers);
          res.write(c)
          res.end()
        })
      })
      request.on('error', function(err) {
        res.writeHead(200, {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json"
        })
        res.end({ "error": err })
      });
      request.end()
      break

    default:
      res.writeHead(404);
      res.end();
      break;
  }
})

server.listen(8088, function() {
  console.log("listen on 8088")
})
