import { Button, Container, Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loginFailAction, loginSuccessAction } from '../../../redux/reducers/auth';
import storage from '../../../storage/storage';
import storageKeys from '../../../storage/storageKeys';
import NavigatorService from '../../navigation/NavigatorService';

class EntryComponent extends PureComponent {
  static navigationOptions = {
    title: 'Entry',
  };

  componentWillMount = async () => {
    const token = await storage.load(storageKeys.TOKEN);
    const { setLogged } = this.props;
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }

  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Button onPress={() => NavigatorService.navigate('I18n')}>
            <Text>I18n Example</Text>
          </Button>
          <Button onPress={() => NavigatorService.navigate('Counter')}>
            <Text>Counter Example</Text>
          </Button>
          <Button onPress={() => NavigatorService.navigate('Form')}>
            <Text>Form Example</Text>
          </Button>
          <Button onPress={() => NavigatorService.navigate('Login')}>
            <Text>Graphql Example</Text>
          </Button>
        </View>
      </Container>);
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
  setLogged: (logged) => {
    if (logged) {
      dispatch(loginSuccessAction());
    } else {
      dispatch(loginFailAction());
    }
  },
});

const EntryScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryComponent);

export default EntryScreen;
