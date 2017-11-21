import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Profile extends Component {

  render() {
  	let email = this.props.navigation.state.params.email;
  	let name = email.substring(0, email.indexOf('@'));
    return (
      <View style={styles.container}>
      	<Text style={styles.message}> Hello, you're logged in as "{name}" </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    backgroundColor: '#f1f1f1',
	    alignItems: 'center',
	    justifyContent: 'center',
	}
});