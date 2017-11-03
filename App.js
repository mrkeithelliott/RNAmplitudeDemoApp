/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';
import PVAmplitude from 'rnamplitudebridge'

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { 
      text: ''
     };
  }

  logEvent() {
    PVAmplitude.logEvent('this.state.text');
  }

  render() {
    // PVAmplitude.trackSessions(true)
    // PVAmplitude.minTimeBetweenSessionsMillis(30*60*1000)
    PVAmplitude.initializeApiKey("d0abb9213d5a24d235f7884e7c53899f")
    PVAmplitude.logEvent("TestEvent-1")
    PVAmplitude.logEventWithProperties("EventWithProperties", {propA: "value A", propB: "value B"})
    PVAmplitude.logEventWithPropertiesAndSession("EventWithPropertiesAndSession", {propA: "value A", propB: "value B"}, true)
    PVAmplitude.logEventWithGroups("logEventWithGroups", {propA: "value A", propB: "value B"}, {"East Coast": "EC Group", "West Coast":"WC Group"})
    PVAmplitude.logEventWithGroupsAndSession("logEventWithGroupsAndSession",{propA: "value A", propB: "value B"},{"East Coast": "EC Group", "West Coast":"WC Group"}, true )
    PVAmplitude.setUserId("Demo-Craig")
    PVAmplitude.identifySet("currentSongPlayed", "Harlem Blues")
    PVAmplitude.identifySetOnce("gender", "male")
    // PVAmplitude.identifyUnset("gender")
    // PVAmplitude.trackSessions(false)

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Amplitude Bridge Demo
        </Text>
        <TextInput
        placeholder="Enter EventName"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button
        onPress={this.logEvent}
        title="Log Event"
        color="#841584"
      />
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
