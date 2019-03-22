import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routers from './router/index.js';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>

          {routers.map((r, key) => (
            <Route
              component={r.component}
              exact={!!r.exact}
              key={key}
              path={r.path}
            />
          ))}

      </Switch>
    </ConnectedRouter>
  )
}

export default App;
