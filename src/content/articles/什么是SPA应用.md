---
title: 什么是SPA应用
date: 2021-11-23
tags:
  - vue
  - JavaScript
---
# 什么是SPA应用

**含义**

SPA全称是singel-page-application,即单页面应用，翻译过来就是单页应用 `SPA`是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（`HTML`、`JavaScript`和 `CSS`）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面举个例子来讲就是一个杯子，早上装的牛奶，中午装的是开水，晚上装的是茶，我们发现，变的始终是杯子里的内容。我们熟知的JS框架如 `react`,`vue`,`angular`,`ember`都属于 `SPA。`

**优缺点**

优点：

* 具有桌面应用的即时性、网站的可移植性和可访问性
* 用户体验好、快，内容的改变不需要重新加载整个页面
* 良好的前后端分离，分工更明确

缺点：

* 不利于搜索引擎的抓取
* 首次渲染速度相对较慢

## 如何给SPA做SEO?

目前我使用的主要是服务端渲染，vue可以使用NUXT.JS,react可以使用NEXT.js，还有其他的一些方案，比如静态化和通过ngnix转发配置要求，重新解析HTML文件方便爬虫爬取等。
