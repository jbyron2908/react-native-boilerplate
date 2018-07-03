import { Button, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import asDialog from '../hoc/asDialog';

const MyModal = props => (
  <View>
    <Text>This is a modal</Text>
    <Button
      onPress={props.closeModal}
    >
      <Text>Close</Text>
    </Button>
  </View>
);

MyModal.propTypes = {
  closeModal: PropTypes.func,
};

MyModal.defaultProps = {
  closeModal: undefined,
};

export default asDialog(
  MyModal,
  {
    containerStyle: {
      backgroundColor: 'rgba(52,52,52,0.5)',

    },
    modalStyle: { width: '50%' },
  },
);
