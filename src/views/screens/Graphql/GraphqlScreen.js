import { Button, Content, ListItem, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FlatList, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeAllAction } from '../../../redux/logics/removeAll';
import { syncAction } from '../../../redux/logics/sync';
import { accountsSelector } from '../../../redux/selectors/accounts';
import { categoriesSelector } from '../../../redux/selectors/categories';
import { transactionsSelector } from '../../../redux/selectors/transactions';


class GraphqlComponent extends PureComponent {
  static navigationOptions = {
    title: 'Graphql',
  };

  render() {
    const {
      categories, accounts, transactions,
      onSyncClick, onRemoveAllClick,
    } = this.props;
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

          <FlatList
            keyExtractor={item => item.id}
            data={accounts}
            renderItem={
            ({ item }) => (
              <ListItem>
                <Text>{item.name}</Text>
              </ListItem>
            )
          }
          />

          <FlatList
            keyExtractor={item => item.id}
            data={categories}
            renderItem={
            ({ item }) => (
              <ListItem>
                <Text>{item.name}</Text>
              </ListItem>
            )
          }
          />

          <FlatList
            keyExtractor={item => item.id}
            data={transactions}
            renderItem={
            ({ item }) => (
              <ListItem>
                <Text>{item.description}</Text>
              </ListItem>
            )
          }
          />
        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

GraphqlComponent.propTypes = {
  onSyncClick: PropTypes.func.isRequired,
  onRemoveAllClick: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired, // eslint-disable-line 
  accounts: PropTypes.array.isRequired, // eslint-disable-line 
  transactions: PropTypes.array.isRequired, // eslint-disable-line 
};

const mapStateToProps = createStructuredSelector({
  categories: categoriesSelector,
  accounts: accountsSelector,
  transactions: transactionsSelector,
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

