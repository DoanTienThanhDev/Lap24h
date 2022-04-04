import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import RNText from './RNText';
import {Colors} from '../../themes';
import RNView from './RNView';

const RNButton = ({
  label,
  mTop,
  mBottom,
  mLeft,
  mRight,
  mHoz,
  mVer,
  margin,
  colorText,
  bgColor,
  w,
  h,
  disable,
  style,
  loading,
  icon,
  iconColor,
  iconSize,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style && style,
        h && {height: h},
        mBottom && {marginBottom: mBottom},
        bgColor && {backgroundColor: bgColor},
        w && {width: w},
        margin && {margin},
        mVer && {marginVertical: mVer},
        mHoz && {marginHorizontal: mHoz},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        mTop && {marginTop: mTop},
      ]}
      disabled={loading || disable}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.primary} />
      ) : (
        <RNView row center>
          <RNText
            textAlign={'center'}
            size={16}
            fontWeight="700"
            color={colorText || 'white'}>
            {label}
          </RNText>
        </RNView>
      )}
    </TouchableOpacity>
  );
};

export default RNButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 6,
    backgroundColor: '#00ced1',
  },
});
