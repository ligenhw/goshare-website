<h1 align="center"><a href="https://www.bestlang.cn" target="_blank">goshare-website</a></h1>

> 基于 React + Material-ui 实现的 博客前端


[![Build Status](https://travis-ci.org/ligenhw/goshare-website.svg?branch=master)](https://travis-ci.org/ligenhw/goshare-website)
[![codecov](https://codecov.io/gh/ligenhw/goshare-website/branch/master/graph/badge.svg)](https://codecov.io/gh/ligenhw/goshare-website)
[![codebeat badge](https://codebeat.co/badges/d4eed87f-188e-414e-ab63-169af4583092)](https://codebeat.co/projects/github-com-ligenhw-goshare-website-master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fligenhw%2Fgoshare-website.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fligenhw%2Fgoshare-website?ref=badge_shield)

后端项目: https://github.com/ligenhw/goshare


## Contents 目录

- [Introduction 介绍 ✨](#introduction-介绍-)
- [功能 🔥](#功能-)
- [线上效果 ✨](#线上效果-)
- [Usage 🚀](#Usage-)
- [技术栈 ](#技术栈)
- [部署 📦](#部署-)
- [Show your support ⭐️](#Show-your-support-)
- [License 📝](#License-)


## Introduction 介绍 ✨

goshare-website is a blog front-end based on React + Material-ui

goshare-website 是基于 React + Material-ui 实现的 博客前端


## 功能 🔥

* 文章管理
* 用户注册登录
* 评论及回复
* 主题切换

## 线上效果 ✨

https://www.bestlang.cn


## Usage 🚀

```bash
git clone git@github.com:ligenhw/goshare-website.git

cd goshare-website

yarn & yarn start
```

## 技术栈

### react  ui框架

https://zh-hans.reactjs.org/docs/getting-started.html


### material-ui  material风格界面组件

https://material-ui.com/zh/getting-started/installation/


### redux  统一管理应用数据

https://redux.js.org/introduction/getting-started


### react-router  前端页面路由

https://reacttraining.com/react-router/web/guides/quick-start

https://github.com/ReactTraining/react-router


### Markd  解析markdown格式文章

https://marked.js.org/#/README.md


### prismjs  代码语法高亮

https://prismjs.com/


### React Loadable  代码分割

https://github.com/jamiebuilds/react-loadable


## 部署 📦

```bash
GENERATE_SOURCEMAP=false yarn build

docker run --name some-nginx -p 80:80 -d -v  ~/goshare-website/build:/usr/share/nginx/html nginx
```


## Show your support ⭐️

Please ⭐️ this repository if this project helped you!


## License 📝
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fligenhw%2Fgoshare-website.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fligenhw%2Fgoshare-website?ref=badge_large)