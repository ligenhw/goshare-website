import React from 'react';
import Loadable from 'react-loadable';

const Loading = (props) => {
    if (props.error) {
        return <div>Error!</div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
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
          loader: () => import('../page/blog.js'),
          loading: Loading,
          delay: 300,
        }),
    },
    {
        name: 'login',
        path: '/login',
        exact: true,
        component: Loadable({
          loader: () => import('../components/home/index.js'),
          loading: Loading,
          delay: 300,
        }),
    },
]