# goshare-website

基于 React + Material-ui 实现的 博客前端 

[![Build Status](https://travis-ci.org/ligenhw/goshare-website.svg?branch=master)](https://travis-ci.org/ligenhw/goshare-website)
[![codecov](https://codecov.io/gh/ligenhw/goshare-website/branch/master/graph/badge.svg)](https://codecov.io/gh/ligenhw/goshare-website)

后端项目: https://github.com/ligenhw/goshare

> 项目参考 以下开源库 及 文档:

## react

https://zh-hans.reactjs.org/docs/getting-started.html

## material-ui
 
https://material-ui.com/getting-started/installation/

icon:

https://material.io/tools/icons/

## redux

https://www.redux.org.cn/

https://redux.js.org/introduction/getting-started

## react-router

http://react-guide.github.io/react-router-cn/docs/Introduction.html

https://github.com/ReactTraining/react-router

## connected-react-router

https://github.com/supasate/connected-react-router


## Markd

https://marked.js.org/#/README.md

## highlight.js

## React Loadable

https://github.com/jamiebuilds/react-loadable


## 使用 create-react-app 配置代理服务器

https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#docsNav

## 正则表达式

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

## Fetch API

https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

## github develop

https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/
https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

## 要保证 state 映射 到 新的对象

const mapStateToProps = state => ({article: state.article})

否则，如下 会导致不重新绘制。 
const mapStateToProps = state => state.article

## 防盗链

<meta name="referrer" content="never">

## 部署

docker run --name some-nginx -p 80:80 -d -v  ~/goshare-website/build:/usr/share/nginx/html nginx


