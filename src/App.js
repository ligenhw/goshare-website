import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routers from './router/index.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layouts from './views/layouts'

const theme = createMuiTheme({
  typography: { useNextVariants: true },
});

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <MuiThemeProvider theme={theme}>
          <Layouts>
            {routers.map((r, key) => (
              <Route
                component={r.component}
                exact={!!r.exact}
                key={key}
                path={r.path}
              />
            ))}
          </Layouts>
        </MuiThemeProvider>
      </Switch>
    </ConnectedRouter>
  )
}

export default App;
