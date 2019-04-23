import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import routers from './router/index.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layouts from './views/Layout'
import cyan from '@material-ui/core/colors/cyan'
import pink from '@material-ui/core/colors/pink'

class App extends Component {
  state = {
    theme: 'light'
  }

  onThemeChanged = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark' : 'light'
    }))
  }

  render() {
    const { history } = this.props

    return (
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={
          createMuiTheme({
            palette: {
              type: this.state.theme,
              primary: cyan,
              secondary: pink,
            },
            typography: { useNextVariants: true },
          })
        }>
          <Layouts onThemeChanged={this.onThemeChanged}>
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
}

export default App;
