import React, { Component } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  validEmail(email) {
     var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  login = () => {
    const email = this.state.email;
    const password = this.state.password;
    if (this.validEmail(email) && password.length > 7) {
      this.props.navigation.navigate('Profile', { email: email })
      Keyboard.dismiss();
    } else {
      alert('Invalid email or password')
    }    
  }

  help() {
    alert('To login, enter any valid email and password should be at least 8 characters.')
  }

  render() {
    return (
      <KeyboardAvoidingView key='loginCard' behavior="padding" style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.logo}>LOGO</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Email address'
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}
            onChangeText={ (email) => this.setState({email})} />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            secureTextEntry
            ref={(input) => this.passwordInput = input}
            returnKeyType='go'
            onSubmitEditing={this.login}
            onChangeText={ (password) => this.setState({password})} />
          <TouchableOpacity onPress={this.login}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.help}>
            <View style={styles.help}>
              <Text style={styles.helpText}>[ help ]</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderRadius: 4,
    borderWidth: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    justifyContent: 'center',
  },
  helpText: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginBtn: {
    backgroundColor: '#33b5e5',
    padding: 10,
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    color: '#888',
    fontSize: 24,    
    textAlign: 'center',
  },
  textInput:{
    height: 60,
    padding: 10,
  },
  
});