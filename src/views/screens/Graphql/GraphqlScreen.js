import { Button, Content, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeAllAction } from '../../../redux/logics/removeAll';
import { syncAction } from '../../../redux/logics/sync';
import { updateStoreAction } from '../../../redux/logics/updateStore';
import { accountSelector } from '../../../redux/selectors/accounts';


class GraphqlComponent extends PureComponent {
  static navigationOptions = {
    title: 'Graphql',
  };

  componentWillMount = async () => {
    await this.props.updateStore();
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
  updateStore: PropTypes.func.isRequired,
  onSyncClick: PropTypes.func.isRequired,
  onRemoveAllClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  accounts: accountSelector,
});

const mapDispatchToProps = dispatch => ({
  updateStore: () => {
    dispatch(updateStoreAction());
  },
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

