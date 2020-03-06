import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WithUser from '../../hoc/WithUser';
import Appstyle from '../../Config/AppStyle';

class RegistrationForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RegistrationForm</Text>
      </View>
    );
  }
}
export default WithUser(RegistrationForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
