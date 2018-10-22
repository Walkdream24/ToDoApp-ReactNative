import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import TodoInput from './src/component/TodoInput';

export default class App extends React.Component {
  _onPress = (text) => {
    console.log(text);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <TodoInput _onPress={this._onPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center'
  }
});
