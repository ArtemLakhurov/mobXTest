import {inject, observer} from 'mobx-react';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
@inject('store')
@observer
class Component extends React.Component {
  render() {
    const componentStore = this.props.store;
    return (
      <View>
        <Text>It`s counter: {componentStore.count}</Text>
        <Button title="incement" onPress={() => componentStore.increase()} />
        <TextInput onChangeText={(e) => componentStore.wordOnChange(e)} />
        <Button
          title="Add word"
          onPress={() => {
            componentStore.addWord();
          }}
        />
        <Button
          title="reset word list"
          onPress={() => {
            componentStore.resetWordList();
          }}
        />
        <View>
          {componentStore.wordList.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
          <Text>{componentStore.comp}</Text>
        </View>
      </View>
    );
  }
}
export default Component;
