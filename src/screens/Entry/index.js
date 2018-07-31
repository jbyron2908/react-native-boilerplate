import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getSelectToken } from '../../selectors/auth';
import database from '../../rxdb/database/database';

class EntryComponent extends PureComponent {
  async componentWillMount() {
    database.init();
    const { token } = this.props;
    if (token) {
      Actions.replace('RxDB');
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
