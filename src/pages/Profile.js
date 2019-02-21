import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: '个人信息',
  };
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('开始旅程');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Profile!</Text>
        <Button title="Go To Home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
