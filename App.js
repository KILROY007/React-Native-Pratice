/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <View style={styles.View1}>
          <Text style={{ fontSize: 40, color: 'white' }}>1</Text>
        </View>
        <View style={styles.View2}>
          <Text style={{ fontSize: 40, color: 'white' }}>2</Text>
        </View>
        <View style={styles.View3}>
          <Text style={{ fontSize: 40 }}>3</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.View4}>
          <Text style={{ fontSize: 40 }}>4</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.View5}>
          <Text style={{ fontSize: 40 }}>5</Text>
        </View>
      </View>
      <View style={styles.container3}>
        <View style={styles.View6}>
          <Text style={{ fontSize: 40 }}>6</Text>
        </View>
        <View style={styles.View7}>
          <Text style={{ fontSize: 40 }}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View2: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View3: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View5: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 11.5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  View6: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
