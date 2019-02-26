import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user';

class Profile extends Component {
  static navigationOptions = {
    title: '个人信息',
  };
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('开始旅程');
  }

  login = () => {
    this.props.userActions.login();
    console.log(1111, this.props.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Profile!</Text>
        <Button title="Go To Home" onPress={() => this.props.navigation.navigate('Home')} />
        <Button title="登录" onPress={this.login} />
        <Text>登录状态：{this.props.user.logged ? '已登录':'未登录'}{this.props.user.fetching && '  fetching...'}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

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
