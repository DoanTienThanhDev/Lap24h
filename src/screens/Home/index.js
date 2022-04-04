import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {RNView, RNText} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RNView fill loading={false}>
        <RNText color={'red'} pHoz={28}>
          Loading
        </RNText>
      </RNView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
