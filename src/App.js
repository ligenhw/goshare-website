import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routers from './router/index.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layouts from './views/Layout'

const theme = createMuiTheme({
  
  typography: { useNextVariants: true },
});

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
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
          </Switch>
        </Layouts>
      </MuiThemeProvider>
    </ConnectedRouter>
  )
}

export default App;
