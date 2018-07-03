import React, { Component } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(52,52,52,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dialog: {
    width: '80%',
    height: '80%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const defaultConfig = {
  clickOutsideToDismiss: true,
  containerStyle: {},
  modalStyle: {},
};

export default (
  WrappedComponent,
  config = {},
) =>
  class asDialog extends Component {
    constructor(props) {
      super(props);

      this.state = {
        opacity: new Animated.Value(0),
      };

      this.config = { ...defaultConfig, ...config };
    }

    componentDidMount() {
      Animated.timing(this.state.opacity, {
        duration: 200,
        toValue: 1,
      }).start();
    }

    closeModal = () => {
      Animated.timing(this.state.opacity, {
        duration: 200,
        toValue: 0,
      }).start(Actions.pop);
    };

    renderLightBox = () => (
      <TouchableWithoutFeedback onPress={null}>
        <View
          style={[styles.dialog, this.config.modalStyle]}
        >
          <WrappedComponent
            {...this.props}
            closeModal={() => this.closeModal()}
          />
        </View>
      </TouchableWithoutFeedback>
    );

    render() {
      return (
        <TouchableWithoutFeedback
          disabled={!this.config.clickOutsideToDismiss}
          onPress={this.closeModal}
        >
          <Animated.View
            style={[
              styles.container,
              { opacity: this.state.opacity },
              config.containerStyle,
            ]}
          >
            {this.renderLightBox()}
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }
  };
