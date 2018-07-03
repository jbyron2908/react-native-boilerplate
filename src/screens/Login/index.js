import { Button, Content, Form, Input, Item, Label, Text, CheckBox } from 'native-base';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { decrease, increase } from '../../reducers/counter';
import { getSelectCounter } from '../../selectors/counter';
import InputReduxForm from '../../components/form/InputReduxForm';


const Login = ({ counter, onPlusCounterClick, onMinusCounterClick }) => (
  <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    extraHeight={Platform.select({ android: 200 })}
    extraScrollHeight={Platform.select({ android: 10 })}
  >
    <Content>
      <Form>
        <Field name="name" component={InputReduxForm} label="Username" />
        <Field name="name" component={CheckBox} />
      </Form>

      <Text>Counter: {counter}</Text>

      <Button onPress={() => onPlusCounterClick()}>
        <Text>
          Plus
        </Text>
      </Button>

      <Button onPress={() => onMinusCounterClick()}>
        <Text>
          Minus
        </Text>
      </Button>
    </Content>
  </KeyboardAwareScrollView>
);


Login.propTypes = {
  counter: PropTypes.number.isRequired,
  onPlusCounterClick: PropTypes.func.isRequired,
  onMinusCounterClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  counter: getSelectCounter(),
});

const mapDispatchToProps = dispatch => ({
  onPlusCounterClick: () => {
    dispatch(increase());
  },
  onMinusCounterClick: () => {
    dispatch(decrease());
  },
});

const LoginForm = reduxForm({
  form: 'login',
})(Login);

const LoginRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default LoginRedux;

