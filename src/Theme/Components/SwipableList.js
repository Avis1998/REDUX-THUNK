import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import LottieView from 'lottie-react-native';

const colors = {
  BORDER_GRAY: '#EFEFEF',
  BACKGROUND_WHITE : '#FFFFFF'
};

export const SwipableList = (props) => {
  const swipeConfig = props.swipeConfig ? props.swipeConfig : config;
  const styleMaster = props.styleMaster;
  const styleSwipeArea = props.styleSwipeArea;
  const onSwipeLeftWidth = props.onSwipeLeftWidth
    ? props.onSwipeLeftWidth
    : '80%';
  //   const onSwipeRightWidth = props.onSwipeRightWidth
  //     ? props.onSwipeRightWidth
  //     : '100%';
  const onInitialWidth = props.onInitialWidth ? props.onInitialWidth : '100%';
  const currentItem = props.currentItem;

  const mainWidth = useRef(new Animated.Value(100)).current;
  const [borderWidthState, setBorder] = useState(0);
  const animFn = (val) => {
    Animated.timing(mainWidth, {
      toValue: val,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  const onSwipeLeft = (gestureState) => {
    animFn(Number(onSwipeLeftWidth.split('%')[0]));
    setBorder(1);
  };
  const onSwipeRight = (gestureState) => {
    animFn(Number(onInitialWidth.split('%')[0]));
    setBorder(0);
  };

  return (
    <View style={[styles.swipeMaster, styleMaster]}>
      <GestureRecognizer
        onSwipeLeft={(state) => onSwipeLeft(state)}
        onSwipeRight={(state) => onSwipeRight(state)}
        config={swipeConfig}>
        <View style={styles.mainArea}>
          <Animated.View
            style={[
              styles.swipeArea,
              styleSwipeArea,
              {
                width: mainWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                borderRightWidth: borderWidthState
              }
            ]}>
            {props.children}
          </Animated.View>
          <Animated.View
            style={[
              styles.rightAreaView,
              {
                width: mainWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['100%', '0%']
                })
              }
            ]}>
            <TouchableOpacity
              onPress={() => {
                console.log('delete pressed');
                props.onDeletePress(currentItem)
              }}
              style={styles.tochableArea}>
              <LottieView
                source={require('../../../assets/delete.json')}
                autoPlay
                loop
                style={styles.deleteLottie}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeMaster: {
    width: '100%',
    padding: 5,
    backgroundColor : colors.BACKGROUND_WHITE
  },
  mainArea: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.BORDER_GRAY,
    borderRadius: 5,
    padding: 5,
    backgroundColor : colors.BACKGROUND_WHITE
  },
  swipeArea: {
    width: '100%',
    backgroundColor : colors.BACKGROUND_WHITE,
    zIndex: 2,
    borderColor: colors.BORDER_GRAY,
  },
  rightAreaView: {
    width: '0%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteLottie: {
    height: 75,
    position: 'absolute',
    right: 0,
    zIndex: 0,
  },
  tochableArea: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
