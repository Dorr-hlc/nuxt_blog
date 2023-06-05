---
title: Nuxt.js与SSG
date: 2023-03-05
tags:
  - nuxt.js
---
# 什么是SSG？

SSG全称（Static Site Generator ），中文名就是静态站点生成器，是一种渲染模式，除此以外我还了解的有

* SSR 全称（Server-Side Rendering） 服务器端渲染
* CSR 全称（Client-Side Rendering） 客户端渲染
* ISR 全称（Incremental Static Regeneration） 增量静态再生

而我们接触最多的渲染模式应该是CSR，全称（Client-Side Rendering，也就是客户端渲染，页面的渲染其实就是浏览器将HTML文本转化为页面帧的过程。而如今我们大部分WEB应用都是使用 JavaScript 框架（Vue、React、Angular）进行页面渲染的，也就是说，求在执行 JavaScript 脚本的时候，HTML页面已经开始解析并且构建DOM树了，JavaScript 脚本只是动态的改变 DOM 树的结构，使得页面动态渲染。这个过程就叫客户端渲染。

SSR服务端渲染就是在浏览器请求页面URL时，服务端直接将我们需要的HTML文本组装好，并返回给浏览器，这个HTML文本被浏览器解析之后，不需要经过JavaScript脚本的执行，可直接构建出完整的DOM树并展示页面中。这个服务端组装的过程，叫做服务端渲染。而从服务器端请求URL获取数据的过程，是在页面加载之前完成的，该过程将首先运行特殊函数映射相关数据，并返回给客户端。在返回前存在一定（映射）延迟。

**ISR 全称（Incremental Static Regeneration） 增量静态再生：**
数据在构建时获取一次，在一定冷却时间后再次获取，并在第二次访问时提供。
增量静态再生是SSG和SSR的组合，它是静态服务的，但在特定的时间和条件下，页面将重新构建并再次从API获取数据。

而我们现在所学习的SSG 就是静态站点生成器：在构建时就会去获取一次数据，解析是在构建时执行的，当发出请求时，html 将静态存储，直接发送回客户端。因此SSG适合用来做纯静态网站，比如一些官网，博客之类的。

# 什么是Nuxt.js

Nuxt.js其实就是一个基于vue的用于构建SSR、SSG应用的框架，我所熟知的还有Next.js,这个框架是基于React框架的。二者都是为了SPA模式下的一些不足，比如SEO等方面，因此我们要实现一个SSG 应用，可以直接使用Nuxt框架。以下是初步使用的步骤以及讲解。

1、使用命令行创建一个ssg应用。

注意：如果是第一次使用，还需要加上npx，因为需要安装create-nuxt-app 脚手架。

2、选择我们需要的配置项就开始下载安装

以下是我创建一个SSG应用所勾选的配置选项
