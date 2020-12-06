import React from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {customTheme, fontSizes, font_Family} from '../commonTheme';
import {SearchBar} from 'react-native-elements';

export const Header = (props) => {
  const headerText = props.headerText;
  const hideSearchIcon = props.hideSearchIcon ? true : props.hideSearchIcon;
  const requireSearch = props.requireSearch ? props.requireSearch : false;
  const headerMainStayle = props.headerMainStayle;
  const headerTextStyle = props.headerTextStyle;
  const placeHolder = props.placeHolder ? props.placeHolder : 'Search';
  const searchValue = props.searchValue ? props.searchValue : '';
  return requireSearch ? (
    <View style={styles.headermain}>
      <View style={styles.headermainrow}>
        <TouchableOpacity
          onPress={() => props.onBackPress('search')}
          style={styles.headerright}>
          <Ionicons name="ios-arrow-back" color="white" size={25} />
        </TouchableOpacity>
        <View style={styles.headerSearch}>
          <SearchBar
            lightTheme
            searchIcon={null} // You could have passed `null` too
            onChangeText={(text) => props.onChangeText(text)}
            placeholderTextColor={customTheme.OFFWHITE}
            // onClear={someMethod}
            clearIcon
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            inputContainerStyle={styles.searchInput}
            placeholder={placeHolder}
            value={searchValue}
            autoFocus = {true}
          />
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.headermain}>
      <View style={styles.headermainrow}>
        <TouchableOpacity
          onPress={() => props.onBackPress('main')}
          style={styles.headerright}>
          <Ionicons name="ios-arrow-back" color="white" size={25} />
        </TouchableOpacity>
        <View style={[styles.headermiddlesearch, headerMainStayle]}>
          <Text style={[styles.headerrighttxt, headerTextStyle]}>
            {headerText}{' '}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.onSerachPress()}
          style={styles.headerleft}>
          {hideSearchIcon ? null : (
            <AntDesign name="search1" color={customTheme.WHITE} size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  headermain: {
    backgroundColor: customTheme.GREEN_BACKGROUND,
    height: deviceHeight / 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    // position: 'absolute',
    width: '100%',
  },
  headermainrow: {
    flexDirection: 'row',
    height: deviceHeight / 10,
  },
  headerright: {
    width: '10%',
    justifyContent: 'center',
    padding: 5,
  },
  headerleft: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
  },
  headermiddlesearch: {
    width: '80%',
    justifyContent: 'center',
  },
  headerSearch: {
    width: '90%',
    justifyContent: 'center',
  },
  searchContainer: {
    borderBottomColor: customTheme.GREEN_BACKGROUND,
    borderTopColor: customTheme.GREEN_BACKGROUND,
    backgroundColor: customTheme.GREEN_BACKGROUND,
  },
  searchInput: {
    backgroundColor: customTheme.GREEN_LIGHT,
    color: customTheme.WHITE,
    fontFamily: font_Family.REGULAR,
    fontSize: fontSizes.SUB_TEXT_13,
  },
});
