import React from 'react';
import { Item, Input, Text, Label } from 'native-base';
import { WrappedFieldProps } from 'redux-form';

const InputReduxForm = ({
  input, label, type, meta: { touched, error, warning },
}) => {
  let hasError = false;
  if (error !== undefined) {
    hasError = true;
  }

  return (
    <Item error={hasError}>
      <Label>{label}</Label>
      <Input {...input} type={type} />
      {(hasError) ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

InputReduxForm.propTypes = {
  ...WrappedFieldProps,
};

export default InputReduxForm;
