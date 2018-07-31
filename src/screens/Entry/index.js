import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSelectToken } from '../../selectors/auth';

class EntryComponent extends PureComponent {
  componentWillMount() {
    const { token } = this.props;
    if (token) {
      Actions.replace('Home');
    } else {
      Actions.replace('Login');
    }
  }

  render() {
    return <Container />;
  }
}

EntryComponent.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: getSelectToken,
});

const Entry = connect(mapStateToProps)(EntryComponent);

export default Entry;
