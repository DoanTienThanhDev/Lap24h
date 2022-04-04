import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const RNButton = ({
  fill,
  children,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  margin,
  color,
  w,
  h,
  style,
  center,
  ...more
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>RNButton</Text>
    </TouchableOpacity>
  );
};

export default RNButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
