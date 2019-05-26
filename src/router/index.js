import React from 'react';
import Loadable from 'react-loadable';
import LinearQuery from '../components/Progress'

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <LinearQuery />;
  } else {
    return null;
  }
}

export const mainPages = [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/home/IndexContainer'),
      loading: Loading,
      delay: 300,
    }),
    title: '文章'
  },
  {
    name: 'achive',
    path: '/achive',
    exact: true,
    component: Loadable({
      loader: () => import('../components/archive'),
      loading: Loading,
      delay: 300,
    }),
    title: '归档'
  },
  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Projects'),
      loading: Loading,
      delay: 300,
    }),
    title: '项目'
  },
  {
    name: 'books',
    path: '/books',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Books'),
      loading: Loading,
      delay: 300,
    }),
    title: '书籍'
  },
  {
    name: 'link',
    path: '/link',
    exact: true,
    component: Loadable({
      loader: () => import('../components/link'),
      loading: Loading,
      delay: 300,
    }),
    title: '友链'
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () => import('../components/about'),
      loading: Loading,
      delay: 300,
    }),
    title: '关于'
  },
];

const subPages = [
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('../components/sign/SignIn'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'signup',
    path: '/signup',
    exact: true,
    component: Loadable({
      loader: () => import('../components/sign/SignUp'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'articleDetail',
    path: '/articleDetail',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Article'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'editor',
    path: '/editor',
    exact: true,
    component: Loadable({
      loader: () => import('../components/editor/Editor'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'test',
    path: '/test',
    exact: true,
    component: Loadable({
      loader: () => import('../components/test'),
      loading: Loading,
      delay: 300,
    }),
  },
]

export default mainPages.concat(subPages)