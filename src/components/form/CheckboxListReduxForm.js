import _ from 'lodash';
import { List } from 'native-base';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import CheckboxItem from './CheckboxItem';

const CheckboxListReduxForm = (props) => {
  const {
    data,
    input: { value, onChange },
  } = props;

  return (
    <List>

      {_.map(data, (item) => {
        const { label, value: itemValue } = item;
        return (
          <CheckboxItem
            label={label}
            checkValue={itemValue}
            onChange={onChange}
            value={value}
          />
          );
        })
      }

    </List>
  );
};

CheckboxListReduxForm.propTypes = {
  ...WrappedFieldProps,
};

export default CheckboxListReduxForm;
