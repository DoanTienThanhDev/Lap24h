import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {Colors} from '../../themes';

const RNView = ({
  loading,
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
  bgColor,
  w,
  h,
  style,
  center,
  borderBottomWidth,
  borderBottomColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  zIndex,
  ...more
}) => {
  return (
    <View
      {...more}
      style={[
        style && style,
        fill && styles.fill,
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
        bgColor && {backgroundColor: bgColor},
        w && {width: w},
        h && {height: h},
        center && styles.center,
        borderBottomWidth && {borderBottomWidth},
        borderBottomColor && {borderBottomColor},
        borderTopRightRadius && {borderTopRightRadius},
        borderTopLeftRadius && {borderTopLeftRadius},
        borderBottomLeftRadius && {borderBottomLeftRadius},
        borderBottomRightRadius && {borderBottomRightRadius},
      ]}>
      {loading && (
        <View
          style={[
            styles.containerLoading,
            StyleSheet.absoluteFill,
            {backgroundColor: Colors.bgLoading, zIndex},
          ]}>
          <View style={styles.loading}>
            <ActivityIndicator color={Colors.primary} />
          </View>
        </View>
      )}
      {children}
    </View>
  );
};

export default RNView;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingView: {
    backgroundColor: 'red',
  },
  loading: {
    height: 80,
    width: 80,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
