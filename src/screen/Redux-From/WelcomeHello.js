import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class WelcomeHello extends Component {
  render() {
    console.log('Welcome Hello Props : ', this.props);
    const {data} = this.props;
    // const
    return (
      <View style={styles.container}>
        <Text>WelcomeHello + {data.PhNo}</Text>
      </View>
    );
  }
}

mapstatetoprops = state => {
  return {
    data: state.form.Simple.values,
  };
};
export default connect(mapstatetoprops, null)(WelcomeHello);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
