import { Button, Container, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decreaseAction, increaseAction } from '../../../redux/reducers/counter';
import { counterSelector } from '../../../redux/selectors/counter';

class CounterComponent extends PureComponent {
  static navigationOptions = {
    title: 'Counter',
  };

  render() {
    const { counter, onIncreaseClick, onDecreaseClick } = this.props;

    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Button onPress={() => onIncreaseClick()}>
            <Text>Increase counter</Text>
          </Button>
          <Button onPress={() => onDecreaseClick()}>
            <Text>Decrease counter</Text>
          </Button>
          <Text>Counter: {counter}</Text>
        </View>
      </Container>);
  }
}

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  counter: counterSelector,
});

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => {
    dispatch(increaseAction());
  },
  onDecreaseClick: () => {
    dispatch(decreaseAction());
  },
});

const CounterScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterComponent);

export default CounterScreen;

