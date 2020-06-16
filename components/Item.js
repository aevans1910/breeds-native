import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Item({ title, data }) {
    const info = Object.keys(data)
    const caracteristics = info.filter((cat) => {
        if (cat === "breed") {
            return false
        }
        return true
    }).map((cat) => {
        return (
            <Text>{cat}: {data[cat]}</Text>
        )
    })
    return (
        <View style={styles.container}>
            <Text style={StyleSheet.title}>{title}</Text>
            {caracteristics}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      margin: 1,
    },
  });