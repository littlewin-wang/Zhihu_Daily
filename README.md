# [知乎日报](http://littlewin-vue-zhihudaily.daoapp.io)

> 基于Vue和Node.js的Web单页应用

> Web容器支持: [docker](https://www.docker.com/) + [Daocloud](https://www.daocloud.io/) 

## 技术栈
- [vue 2.0](https://github.com/vuejs/vue) + [vue-router 2.0](https://github.com/vuejs/vue-router) + [vuex 2.0](https://github.com/vuejs/vuex) + [vue-resource](https://github.com/pagekit/vue-resource)
- [stylus](https://github.com/stylus/stylus) + [normalize.css](https://github.com/necolas/normalize.css) + ~~知乎日报原生样式（直接照搬了我会乱说o(╯□╰)o）~~

## Preview
<br><img src="https://cloud.githubusercontent.com/assets/14028075/21759136/eb939fd2-d67c-11e6-811f-4bdf67f67c73.gif" width="70%" height="70%">

## Feature

- 每日热门话题
- 专栏
- 主题日报
- 评论和赞

## 本地运行
``` shell
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Tips
 - [vue-cli脚手架适配](https://github.com/littlewin-wang/Zhihu_Daily/blob/master/docs/vue-cli%E9%80%82%E9%85%8D.md)
 - [路由管理](https://github.com/littlewin-wang/Zhihu_Daily/blob/master/docs/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86.md)
 - [状态管理](https://github.com/littlewin-wang/Zhihu_Daily/blob/master/docs/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86.md)
 - [体验优化](https://github.com/littlewin-wang/Zhihu_Daily/blob/master/docs/%E4%BD%93%E9%AA%8C%E4%BC%98%E5%8C%96.md)
 
## TODO
 - [x] 数据获取
 - [x] 状态管理
 - [x] 构建界面
 - [x] 体验优化
 - [ ] transition优化
 - [ ] 异步加载组件

## 参考
 > [知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90) By [izzyleung](https://github.com/izzyleung)

 > [vue-zhihu-daily](https://github.com/hilongjw/vue-zhihu-daily) By [hilongjw](https://github.com/hilongjw)

## License
 [MIT](http://opensource.org/licenses/MIT)
