import { Button, Content, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeAllAction } from '../../../redux/logics/removeAll';
import { syncAction } from '../../../redux/logics/sync';
import { accountSelector } from '../../../redux/selectors/accounts';
import database from '../../../rxdb/database/database';


class GraphqlComponent extends PureComponent {
  static navigationOptions = {
    title: 'Graphql',
  };

  componentWillMount = async () => {
    await database.init();
  }

  render() {
    const { onSyncClick, onRemoveAllClick } = this.props;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}
        extraScrollHeight={Platform.select({ android: 10 })}
      >
        <Content>
          <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

            <Button style={{ marginRight: 25 }} onPress={() => onSyncClick()}>
              <Text>Sync</Text>
            </Button>

            <Button onPress={async () => { await onRemoveAllClick(); }}>
              <Text>Remove all</Text>
            </Button>

          </View>
        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

GraphqlComponent.propTypes = {
  onSyncClick: PropTypes.func.isRequired,
  onRemoveAllClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accounts: accountSelector,
});

const mapDispatchToProps = dispatch => ({
  onSyncClick: () => {
    dispatch(syncAction());
  },
  onRemoveAllClick: () => {
    dispatch(removeAllAction());
  },
});

const GraphqlScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphqlComponent);

export default GraphqlScreen;

