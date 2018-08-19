import { Button, Content, Form, Text, Toast, View } from 'native-base';
import React, { PureComponent } from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputForm from '../../components/form/InputForm';

class FormScreen extends PureComponent {
  static navigationOptions = {
    title: 'Login',
  };

  showToast(name, nickname) {
    Toast.show({
      text: `Name: ${name}, Nickname: ${nickname}`,
      position: 'bottom',
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardOpeningTime={0}
        extraHeight={Platform.select({ android: 200 })}
        extraScrollHeight={Platform.select({ android: 10 })}
      >
        <Content>

          <FinalForm
            onSubmit={({ name, nickname }) => this.showToast(name, nickname)}
            render={({ handleSubmit }) => (
              <View>

                <Form>
                  <Field name="name" component={InputForm} label="Name" />
                  <Field name="nickname" component={InputForm} label="Nickname" />
                </Form>

                <View style={{ marginTop: 10 }} flexDirection="row" justifyContent="center" >

                  <Button style={{ marginRight: 25 }} onPress={() => handleSubmit()}>
                    <Text>Submit</Text>
                  </Button>

                </View>
              </View>
            )}
          />

        </Content>
      </KeyboardAwareScrollView>
    );
  }
}

export default FormScreen;

