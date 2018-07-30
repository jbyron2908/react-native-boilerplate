import { Content, Icon, Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getSelectToken } from '../../selectors/auth';
import { Actions } from '../../../node_modules/react-native-router-flux';

class SplashComponent extends PureComponent {
  componentWillMount() {
    const { token } = this.props;
    if (token) {
      console.log('token - exists');
      Actions.push('Main');
    } else {
      console.log('token - not exists');
      Actions.push('Login');
    }
  }

  render() {
    return (
      <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>

        <View alignItems="center" justifyContent="center">

          <Icon style={{ fontSize: 42 }} type="Ionicons" name="cash" />

          <Text style={{ fontSize: 24 }} >
              My Finance
          </Text>

        </View>


      </Content>
    );
  }
}

SplashComponent.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: getSelectToken,
});

const mapDispatchToProps = dispatch => ({

});

const Splash = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashComponent);

export default Splash;

