import { Button, Content, Form, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field, reduxForm } from 'redux-form';
import InputReduxForm from '../../components/form/InputReduxForm';
import database from '../../rxdb/database/database';

class RxDBComponent extends PureComponent {
  async getUsers() {
    console.log('getUsers');
    const db = await database.getInstance();
    const userArray = await db.users.find().exec();
    console.log(userArray);
    userArray.forEach((userDoc) => {
      console.log(userDoc.name);
      console.log(userDoc.email);
    });
  }

  async removeUsers() {
    console.log('getUsers');
    const db = await database.getInstance();
    const userArray = await db.users.find().exec();
    userArray.forEach(async (user) => {
      await user.remove();
    });
  }

  render() {
    const { submit } = this.props;
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

        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

RxDBComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

const RxDB = reduxForm({
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

export default RxDB;

