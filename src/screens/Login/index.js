import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import InputReduxForm from '../../components/form/InputReduxForm';
import { getUser } from '../../epics/user';

const Login = ({ submit, onGetUserGraphQLClick }) => (
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

        <Button onPress={() => Actions.SignUp()}>
          <Text>Sign up</Text>
        </Button>

      </View>

      <Button onPress={() => onGetUserGraphQLClick()}>
        <Text>
          Get user
        </Text>
      </Button>

    </Content>
  </KeyboardAwareScrollView>
);


Login.propTypes = {
  submit: PropTypes.func.isRequired,
  onGetUserGraphQLClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({
  onGetUserGraphQLClick: () => {
    dispatch(getUser());
  },
});

const LoginForm = reduxForm({
  form: 'login',
  onSubmit: values => console.log(values),
})(Login);

const LoginRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginRedux;

