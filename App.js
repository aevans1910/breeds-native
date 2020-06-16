import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';

import { cats } from './breeds'
import Item from './components/Item'
import { black } from 'ansi-colors';

export default function App() {
  return (
    <SafeAreaView>
      <FlatList 
        data={cats}
        renderItem={({ item, index }) => {
          return <Item title={`${index} ${item.breed}`} data={item}/>
        }}
        keyExtractor={item => item.breed}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});
