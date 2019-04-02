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

export default [
  {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/home/index.js'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('../components/SignIn.js'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'signup',
    path: '/signup',
    exact: true,
    component: Loadable({
      loader: () => import('../components/SignUp.js'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'articleDetail',
    path: '/articleDetail',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Article.js'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'editor',
    path: '/editor',
    exact: true,
    component: Loadable({
      loader: () => import('../components/editor/Editor.js'),
      loading: Loading,
      delay: 300,
    }),
  },
  {
    name: 'test',
    path: '/test',
    exact: true,
    component: Loadable({
      loader: () => import('../components/test.js'),
      loading: Loading,
      delay: 300,
    }),
  },
]