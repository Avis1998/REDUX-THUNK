import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

const deviceWidth = Dimensions.get('window').width;
export const Loader = (props) => {

  const visible = props.visible;
  const backDropColor = props.backDropColor
  const backDropOpacity = props.backDropOpacity
  const loaderMainStyle = props.styleLoaderMain
  const loaderSubStyle = props.styleLoaderSub

  const defaultValue = {
    visible: false,
    backDropColor: "rgba(0,0,0,0.4)",
    backDropOpacity: 0.8,
    loaderMainStyle: styles.modelActivity,
    loaderSubStyle: styles.centerContent
  }

  return (
    <Modal
      isVisible={visible ? visible : defaultValue.visible}
      backdropColor={backDropColor ? backDropColor : defaultValue.backDropColor}
      backdropOpacity={backDropOpacity ? backDropOpacity : defaultValue.backDropOpacity}
      useNativeDriver={false}
      onBackButtonPress={() => { }}>
      <View style={loaderMainStyle ? loaderMainStyle : defaultValue.loaderMainStyle}>
        <View style={loaderSubStyle ? loaderSubStyle : defaultValue.loaderSubStyle}>
          <LottieView
            source={require('../../../assets/loaderTwoGreen.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelActivity: {
    alignItems: "center",
    justifyContent: "center"
  },
  centerContent: {
    height: deviceWidth / 2.5,
    width: deviceWidth / 2.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  loadingGif: {
    height: deviceWidth / 3,
    width: deviceWidth / 3,
  },
});
