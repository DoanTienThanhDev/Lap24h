import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Icon name="search" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
