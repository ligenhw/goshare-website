import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { lightTheme, darkTheme, setPrismTheme } from '../components/markdown/prism';
import getTheme from '../store/styles/getTheme'

function themeSideEffect(reduxTheme) {
  setPrismTheme(reduxTheme.paletteType === 'light' ? lightTheme : darkTheme);
  document.body.dir = reduxTheme.direction;
}

class AppWrapper extends React.Component {
  state = {};

  componentDidMount() {
    themeSideEffect(this.props.reduxTheme);
  }

  componentDidUpdate() {
    themeSideEffect(this.props.reduxTheme);
  }


  render() {
    const { children } = this.props;
    const theme = getTheme(this.props.reduxTheme)

    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
  }
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  reduxTheme: PropTypes.object.isRequired,
};

export default connect(state => ({
  reduxTheme: state.theme,
}))(AppWrapper);
