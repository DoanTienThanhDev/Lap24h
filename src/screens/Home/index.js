import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {RNView, RNText, RNButton} from '../../components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RNView fill loading={false} pVer={100} pHoz={28}>
        <RNButton label={'Save'} />
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
