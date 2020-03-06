import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleForm from '../../component/Redux-From/SimpleForm';

class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <SimpleForm />
      </View>
    );
  }
}
export default Hello;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
});
