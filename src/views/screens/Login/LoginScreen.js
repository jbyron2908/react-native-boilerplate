import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginAction } from '../../../redux/logics/login';
import { updateStoreAction } from '../../../redux/logics/updateStore';
import { loggedSelector } from '../../../redux/selectors/auth';
import database from '../../../rxdb/database/database';
import InputForm from '../../components/form/InputForm';

class LoginComponent extends PureComponent {
  static navigationOptions = {
    title: 'Login',
  };

  componentWillMount = async () => {
    await database.init();
    const { logged, navigation } = this.props;
    if (logged) {
      await this.props.updateStore();
      navigation.replace('Graphql');
    }
  }

  render() {
    const { onLoginClick, navigation } = this.props;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}
        extraScrollHeight={Platform.select({ android: 10 })}
      >
        <Content>

          <FinalForm
            onSubmit={({ email, password }) => onLoginClick(email, password)}
            render={({ handleSubmit }) => (
              <View>

                <Form>
                  <Field name="email" component={InputForm} label="Email" />
                  <Field name="password" component={InputForm} label="Password" secureTextEntry />
                </Form>

                <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

                  <Button style={{ marginRight: 25 }} onPress={() => handleSubmit()}>
                    <Text>Login</Text>
                  </Button>

                  <Button onPress={() => navigation.navigate('SignUp')}>
                    <Text>Sign up</Text>
                  </Button>

                </View>
              </View>
            )}
          />

        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

LoginComponent.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  updateStore: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logged: loggedSelector,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: (email, password) => {
    dispatch(loginAction(email, password));
  },
  updateStore: () => {
    dispatch(updateStoreAction());
  },
});

const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default LoginScreen;

