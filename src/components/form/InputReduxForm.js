import React from 'react';
import { Item, Input, Text, Label } from 'native-base';
import PropTypes from 'prop-types';
import { WrappedFieldProps } from 'redux-form';

const InputReduxForm = ({
  input, label, secureTextEntry, meta: { error },
}) => {
  let hasError = false;
  if (error !== undefined) {
    hasError = true;
  }

  return (
    <Item stackedLabel error={hasError}>
      <Label>{label}</Label>
      <Input {...input} secureTextEntry={secureTextEntry} />
      {(hasError) ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

InputReduxForm.propTypes = {
  ...WrappedFieldProps,
  secureTextEntry: PropTypes.bool,
};

InputReduxForm.defaultProps = {
  secureTextEntry: false,
};

export default InputReduxForm;
