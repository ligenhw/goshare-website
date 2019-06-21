import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routers from './router/index.js';
import Layouts from './views/Layout'
import configureStore, { history } from './store/configureStore'
import { Provider } from 'react-redux';
import AppWrapper from './views/AppWrapper.js';
import NoMatch from './views/NoMatch.jsx';

if (process.browser) {
  console.log('version : v0.0.6')
}

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppWrapper>
            <Layouts>
              <Switch>
                {routers.map((r, key) => (
                  <Route
                    component={r.component}
                    exact={!!r.exact}
                    key={key}
                    path={r.path}
                  />
                ))}
                <Route component={NoMatch} />
              </Switch>
            </Layouts>
          </AppWrapper>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App;
