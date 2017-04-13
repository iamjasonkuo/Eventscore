import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import ActionCreators from '../actions/index';
import { ActionCreators } from '../actions/index';
import { bindActionCreators } from 'redux';
import {
  ScrollView,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';
import Search from './Search';
import Filter from './Filter';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Search />
        <Filter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  }
});

class Home extends Component {
  render() {
    console.log('this', this);
    return (
      <View style={styles.container}>
        <Search />
        <Text style={styles.welcome}>Home</Text>
        <Text onPress={Actions.login}>Open modal</Text>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(({routes, loginReducers, signupReducers, eventsReducers, addCountExample}) => { return {routes, loginReducers, signupReducers, eventsReducers, addCountExample}}, mapDispatchToProps)(Home);
