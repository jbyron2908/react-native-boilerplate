import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import InputReduxForm from '../../components/form/InputReduxForm';

const SignUpComponent = ({ submit }) => (
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
        <Field name="passwordConfirm" component={InputReduxForm} label="Password Confirm" secureTextEntry />
      </Form>

      <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="space-around" >
        <Button onPress={() => submit()}>
          <Text>Sign up</Text>
        </Button>
      </View>

    </Content>
  </KeyboardAwareScrollView>
);


SignUpComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = () => ({

});

const SignUpForm = reduxForm({
  form: 'login',
  onSubmit: values => console.log(values),
})(SignUpComponent);

const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);

export default SignUp;

