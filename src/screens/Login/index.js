import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form';
import InputReduxForm from '../../components/form/InputReduxForm';
import { loginAction } from '../../logics/login';

class LoginComponent extends PureComponent {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { submit, navigation } = this.props;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}
        extraScrollHeight={Platform.select({ android: 10 })}
      >
        <Content>

          <Form>
            <Field name="email" component={InputReduxForm} label="Email" />
            <Field name="password" component={InputReduxForm} label="Password" secureTextEntry />
          </Form>

          <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

            <Button style={{ marginRight: 25 }} onPress={() => submit()}>
              <Text>Login</Text>
            </Button>

            <Button onPress={() => navigation.navigate('SignUp')}>
              <Text>Sign up</Text>
            </Button>

          </View>

        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

LoginComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const LoginScreen = reduxForm({
  form: 'login',
  onSubmit: ({ email, password }, dispatch) => dispatch(loginAction(email, password)),
})(LoginComponent);

export default LoginScreen;

