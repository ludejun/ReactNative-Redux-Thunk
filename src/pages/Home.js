import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../actions/home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
  static navigationOptions = {
    title: '首页',
  };
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('🎉🎉🎉🔥');
  }

  onIncrement = () => this.props.homeActions.homeAdd(this.props.count);
  onDecrement = () => this.props.homeActions.homeDecrement(this.props.count);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={styles.reduxSample}>
          <Button title=" + " style={styles.flexItem} onPress={this.onIncrement} />
          <Text style={styles.flexItem}> {this.props.count} </Text>
          <Button title=" - " style={styles.flexItem} onPress={this.onDecrement} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  count: home.count,
});
const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(homeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

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
  reduxSample: {
    flex: 0,
    width: 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexItem: {
    flex: 1,
    textAlign: 'center',
  },
});
