本项目使用[vue-cli#webpack ](https://github.com/vuejs-templates/webpack)模板来进行构建，对模板做了以下修改

#### 1. 屏蔽调试模式下，热加载之后打开浏览器窗口

在build入口文件，`build/dev-server.js`中，屏蔽末尾的以下代码
``` js
  // when env is testing, don't need open it
  // if (process.env.NODE_ENV !== 'testing') {
  //   opn(uri)
  // }
```

#### ~~2. 利用`config/index.js`里面的`proxyTable`可以代理转发api~~ 由于我的docker镜像配置在国外的服务器上，这一步中转没用
在调用知乎提供的 Api 时，遇到了跨域的问题。于是尝试使用 jsonp 来解决，但是发现并不可行。
谷歌了一计发现vue-cli的config文件可以配置proxyTable，继续找到[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)。配置起来很简单：

``` js
'/api': {
  target: 'http://news-at.zhihu.com',  //请求目标
  changeOrigin: true,                  //跨域支持
  pathRewrite: {                       //路径匹配
    '^/api': ''
  }
}
```

这样就不会有跨域问题了，当然这只适用于开发环境。

#### 2. 利用服务器中转API来完成跨域
在中转服务器上开一个Node进程并开启跨域来提供API转接，见[api.server.js](https://github.com/littlewin-wang/Zhihu_Daily/blob/master/api.server.js)

有需求的可以利用，至于地址和端口请看源码吧（小水管，别玩坏了~~）
