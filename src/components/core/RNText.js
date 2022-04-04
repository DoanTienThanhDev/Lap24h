import {StyleSheet, Text} from 'react-native';
import React from 'react';

const RNText = ({
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
  zIndex,
  textAlign,
  underLine,
  lines,
  onPress,
  ...more
}) => {
  return (
    <Text
      {...more}
      style={[
        style && style,
        fill && styles.fill,
        underLine && styles.txtUnderline,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBottom && {paddingBottom: pBottom},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        pHoz && {paddingHorizontal: pHoz},
        pVer && {paddingVertical: pVer},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        margin && {margin},
        color && {color: color},
        w && {width: w},
        h && {height: h},
        textAlign && {textAlign: textAlign},
      ]}
      onPress={onPress && onPress}
      numberOfLines={lines}>
      {children}
    </Text>
  );
};

export default RNText;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
});
