/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';

const App = () => {
  const [item, setItem] = useState([
    { key: 1, item: 'item 1' },
    { key: 2, item: 'item 2' },
    { key: 3, item: 'item 3' },
    { key: 4, item: 'item 4' },
    { key: 5, item: 'item 5' },
    { key: 6, item: 'item 6' },
    { key: 7, item: 'item 7' },
    { key: 8, item: 'item 8' },
    { key: 9, item: 'item 9' },
    { key: 10, item: 'item 10' },
    { key: 11, item: 'item 11' },
    { key: 12, item: 'item 12' },
  ]);

  const [Refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);
    setItem([...item, { key: 13, item: 'Sumant' }]);
    setRefresh(false);
  };

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl refreshing={Refresh} onRefresh={handleRefresh} />
      }>
      {item.map(object => {
        return (
          <View style={styles.item} key={object.key}>
            <Text style={styles.text}>{object.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontSize: 35,
  },
  item: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
});

export default App;
