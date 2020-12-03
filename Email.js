import {inject, observer} from 'mobx-react';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
@inject('EmailStore', 'store')
@observer
class Email extends React.Component {
  render() {
    const emailStore = this.props.EmailStore;
    const store = this.props.store;

    return (
      <View>
        <Text>Email store test</Text>
        <TextInput
          onChangeText={(e) => emailStore.emailOnChange(e)}
          style={{backgroundColor: 'red'}}
        />
        <Text>{emailStore.email}</Text>
        <Text>{store.count}</Text>
      </View>
    );
  }
}

export default Email;
