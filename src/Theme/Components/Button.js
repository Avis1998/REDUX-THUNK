import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export const Button = (props) => {
  const buttonViewStyle = props.buttonViewStyle;
  const buttonData = props.buttonData;
  const buttonTextStyle = props.buttonTextStyle;
  const buttonName = props.buttonName;
  const buttonLoading = props.buttonLoading;
  const loaderSize = props.loaderSize;
  const loaderColor = props.loaderColor;

  return buttonLoading ? (
    <TouchableOpacity
      style={
        buttonViewStyle ? buttonViewStyle : [styles.button, buttonViewStyle]
      }>
      <ActivityIndicator
        size={loaderSize ? loaderSize : 'small'}
        color={loaderColor ? loaderColor : '#fff'}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={
        buttonViewStyle ? buttonViewStyle : [styles.button, buttonViewStyle]
      }
      onPress={() => {
        props.onButtonPress(buttonData);
      }}>
      <Text
        style={
          buttonTextStyle
            ? buttonTextStyle
            : [styles.buttonText, buttonTextStyle]
        }>
        {buttonName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});
