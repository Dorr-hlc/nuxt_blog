---
title: 浅谈对Vue的理解
date: 2021-11-21
tags:
  - vue
  - JavaScript
---
# 什么是Vue

Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。2016年一项针对JavaScript的调查表明，Vue有着89%的开发者满意度。在GitHub上，该项目平均每天能收获95颗星，为Github有史以来星标数第3多的项目同时也是一款流行的JavaScript前端框架，旨在更好地组织与简化Web开发。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互PS: Vue作者尤雨溪是在为AngularJS工作之后开发出了这一框架。他声称自己的思路是提取Angular中为自己所喜欢的部分，构建出一款相当轻量的框架最早发布于2014年2月。

## 核心特性

### 数据驱动（MVVM)

`MVVM`表示的是 `Model-View-ViewModel`


* Model：模型层，负责处理业务逻辑以及和服务器端进行交互
* View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面
* ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁

### 组件化

所谓的组件化就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在 `Vue`中每一个 `.vue`文件都可以视为一个组件2.组件化的优势。

### 指令系统

指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

常用的指令有如下几个：


* 条件渲染指令 `v-if`
* 列表渲染指令 `v-for`
* 属性绑定指令 `v-bind`
* 事件绑定指令 `v-on`
* 双向数据绑定指令 `v-model`

## React和Vue的对比


### 相同点

* 都有组件化思想
* 都支持服务器端渲染
* 都有Virtual DOM（虚拟dom）
* 数据驱动视图
* 都有支持native的方案：`Vue`的 `weex`、`React`的 `React native`
* 都有自己的构建工具：`Vue`的 `vue-cli`、`React`的 `Create React App`


### 区别

* 数据流向的不同。`react`从诞生开始就推崇单向数据流，而 `Vue`是双向数据流
* 数据变化的实现原理不同。`react`使用的是不可变数据，而 `Vue`使用的是可变的数据
* 组件化通信的不同。`react`中我们通过使用回调函数来进行通信的，而 `Vue`中子组件向父组件传递消息有两种方式：事件和回调函数
* diff算法不同。`react`主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。`Vue` 使用双向指针，边对比，边更新DOM。



## 生命周期

字面含义就是一件事物从创建到消失的这个过程就叫做生命周期。

那么在vue中的生命周期可以分为8个阶段，分别是创建前后，挂载前后，更新前后，销毁前后，以及一些特殊场景的生命周期，比如缓存组件的生命周期等。

| 生命周期      | 描述                               |
| ------------- | ---------------------------------- |
| beforeCreate  | 组件实例被创建之初                 |
| created       | 组件实例已经完全创建               |
| beforeMount   | 组件挂载之前                       |
| mounted       | 组件挂载到实例上去之后             |
| beforeUpdate  | 组件数据发生变化，更新之前         |
| updated       | 组件数据更新之后                   |
| beforeDestroy | 组件实例销毁之前                   |
| destroyed     | 组件实例销毁之后                   |
| activated     | keep-alive 缓存的组件激活时        |
| deactivated   | keep-alive 缓存的组件停用时调用    |
| errorCaptured | 捕获一个来自子孙组件的错误时被调用 |

**具体分析如下**


**beforeCreate -> created**

* 初始化 `vue`实例，进行数据观测

**created**

* 完成数据观测，属性与方法的运算，`watch`、`event`事件回调的配置
* 可调用 `methods`中的方法，访问和修改data数据触发响应式渲染 `dom`，可通过 `computed`和 `watch`完成数据计算
* 此时 `vm.$el` 并没有被创建

**created -> beforeMount**

* 判断是否存在 `el`选项，若不存在则停止编译，直到调用 `vm.$mount(el)`才会继续编译
* 优先级：`render` > `template` > `outerHTML`
* `vm.el`获取到的是挂载 `DOM`的

**beforeMount**

* 在此阶段可获取到 `vm.el`
* 此阶段 `vm.el`虽已完成DOM初始化，但并未挂载在 `el`选项上

**beforeMount -> mounted**

* 此阶段 `vm.el`完成挂载，`vm.$el`生成的 `DOM`替换了 `el`选项所对应的 `DOM`

**mounted**

* `vm.el`已完成 `DOM`的挂载与渲染，此刻打印 `vm.$el`，发现之前的挂载点及内容已被替换成新的DOM

**beforeUpdate**

* 更新的数据必须是被渲染在模板上的（`el`、`template`、`render`之一）
* 此时 `view`层还未更新
* 若在 `beforeUpdate`中再次修改数据，不会再次触发更新方法

**updated**

* 完成 `view`层的更新
* 若在 `updated`中再次修改数据，会再次触发更新方法（`beforeUpdate`、`updated`）

**beforeDestroy**

* 实例被销毁前调用，此时实例属性与方法仍可访问

**destroyed**

* 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
* 并不能清除DOM，仅仅销毁实例

**使用场景分析**


| 生命周期      | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务 |
| created       | 组件初始化完毕，各种数据可以使用，常用于异步数据获取         |
| beforeMount   | 未执行渲染、更新，dom未创建                                  |
| mounted       | 初始化结束，dom已创建，可用于获取访问数据和dom元素           |
| beforeUpdate  | 更新前，可用于获取更新前各种状态                             |
| updated       | 更新后，所有状态已是最新                                     |
| beforeDestroy | 销毁前，可用于一些定时器或订阅的取消                         |
| destroyed     | 组件已销毁，作用同上                                         |

### **小问题：数据请求在created和mounted中的区别？**

在这两个生命 周期中都是可以去请求接口数据的，但是created生命周期中请求数据时，此时页面DOM结构还未生成，而在mounted生命周期中此时页面的DOM结构已经完成挂载，因此我们不难发现，created在触发时机上是比mounted要早一些的。因此如果请求的数据是对页面内容的改动，建议放在created中去请求，放在 `mounted`中的请求有可能导致页面闪动（因为此时页面 `dom`结构已经生成）。
