import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import InputReduxForm from '../../components/form/InputReduxForm';
import database from '../../rxdb/database/database';
import { syncSaga } from '../../sagas/sync';

class RxDBComponent extends PureComponent {
  async getUsers() {
    console.log('getUsers');
    const db = await database.getInstance();
    const userArray = await db.users.find().exec();
    console.log(userArray);
  }

  async removeUsers() {
    console.log('getUsers');
    const db = await database.getInstance();
    const userArray = await db.users.find().exec();
    userArray.forEach(async (user) => {
      await user.remove();
    });
  }

  async logRxDB() {
    console.log('logRxDB');
    const db = await database.getInstance();

    console.log('users');
    const userArray = await db.users.find().exec();
    console.log(userArray);

    console.log('categories');
    const categoriesArray = await db.categories.find().exec();
    console.log(categoriesArray);

    console.log('accounts');
    const accountsArray = await db.accounts.find().exec();
    console.log(accountsArray);

    console.log('transactions');
    const transactionsArray = await db.transactions.find().exec();
    console.log(transactionsArray);
  }


  render() {
    const { submit, onSyncClick } = this.props;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}
        extraScrollHeight={Platform.select({ android: 10 })}
      >
        <Content>

          <Form>
            <Field name="name" component={InputReduxForm} label="Name" />
            <Field name="email" component={InputReduxForm} label="Email" />
          </Form>

          <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

            <Button style={{ marginRight: 25 }} onPress={() => submit()}>
              <Text>Create User</Text>
            </Button>

            <Button onPress={async () => { await this.getUsers(); }}>
              <Text>Get Users</Text>
            </Button>

          </View>

          <View flexDirection="row" justifyContent="center">
            <Button onPress={async () => { await this.removeUsers(); }}>
              <Text>Remove Users</Text>
            </Button>
          </View>

          <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

            <Button style={{ marginRight: 25 }} onPress={() => onSyncClick()}>
              <Text>Sync</Text>
            </Button>

            <Button onPress={async () => { await this.logRxDB(); }}>
              <Text>Log RxDB</Text>
            </Button>

          </View>

        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

RxDBComponent.propTypes = {
  submit: PropTypes.func.isRequired,
  onSyncClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
  onSyncClick: () => {
    dispatch(syncSaga());
  },
});

const RxDBForm = reduxForm({
  form: 'rxdb',
  onSubmit: async ({ name }) => {
    try {
      const db = await database.getInstance();
      await db.users.insert({ name, email: `${name}@symbio.com` });
    } catch (error) {
      console.log('insert fail');
      console.log(error);
    }
  },
})(RxDBComponent);

const RxDB = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RxDBForm);

export default RxDB;

