import React from 'react';
import { Item, Label, CheckBox } from 'native-base';
import { WrappedFieldProps } from 'redux-form';

const CheckboxReduxForm = ({
  label,
}) => (
  <Item>
    <Label>{label}</Label>
    <CheckBox />
  </Item>
);

CheckboxReduxForm.propTypes = {
  ...WrappedFieldProps,
};

export default CheckboxReduxForm;
