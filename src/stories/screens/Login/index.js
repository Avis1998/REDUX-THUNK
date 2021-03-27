import React, { Component } from 'react';
import {
 // StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles'
import Toast from 'react-native-simple-toast'
const BLUE = '#2481D4'

class Login extends Component {
  constructor (props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
      merchant: '', //SET THE STATE USERNAME
      password: '', //SET THE PASSWORD
      icEye: 'visibility-off',
      showPassword: true,
    }
  } 
  onPress() {
    if (this.state.merchant == '') {
      Toast.show('please enter user name', Toast.SHORT)
      return
    }else if (this.state.password == '') {
      Toast.show('please enter password ', Toast.SHORT)   
      return
    } 
    else { 
        
      Keyboard.dismiss()
      let name = this.state.merchant; //SET THE ENTERED VALUE TO ANOTHER VARIABLE NAME
      let passwordof = this.state.password;//SET THE ENTERED VALUE TO ANOTHER VARIABLE PASSWORDOF
      console.log('username COMPONENT',name)
      console.log('password COMPONENT',passwordof)
      this.props.Login(name,passwordof); // PASS THE ENTERED VALUE TO THE LOGIN CONTAINER
    }
  }

  handleFocus = event => {
    this.setState({isFocused: true})
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }
  handleBlur = event => {
    this.setState({isFocused: false})
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  } 
  handlePassword = password => {
    let newState = {
      icEye: this.state.icEye,
      showPassword: this.state.showPassword,
      password: password,
      Errorpwd: '',
    }
    this.setState(newState)
    //this.second()
  }
  changePwdType = () => {
    let newState
    if (this.state.showPassword) {
      newState = {
        icEye: 'visibility',
        showPassword: false,
        password: this.state.password,
        icon: false,
      }
    } else {
      newState = {
        icEye: 'visibility-off',
        showPassword: true,
        password: this.state.password,
        icon: true,
      }
    }
    // set new state value
    this.setState(newState)
  }

  clearText () {
    this.setState({
      merchant: '',
      password: '',
    })
  }

 

render () {
  
  const {onFocus, onBlur, ...otherProps} = this.props
   return (
      <View style={styles.container}>

        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'data:image/png;base64,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'}}
        />
        <View>
          <Text style={styles.Login}>Login</Text>
        </View>
        <View style={styles.inputView}>
           <FontAwesome
                active
                size={15}
                color={'#4d4d4d'}
                name="user"
                style={styles.checkIcon}
           />  
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            value={this.state.merchant}
            onChangeText={merchant =>
              this.setState({merchant})
            }
            selectionColor={BLUE}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
            //onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
           <AntDesign
                active
                size={15}
                color={'#4d4d4d'}
                name="lock"
                style={styles.checkIcon}
           />  
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            //secureTextEntry={true}
            value={this.state.password}
            onChangeText={this.handlePassword}
            secureTextEntry={this.state.showPassword}
            placeholder={'Password'}
//
            selectionColor={BLUE}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...otherProps}
            //onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.changePwdType}>
            <FontAwesome
              name={this.state.icon ? 'eye-slash' : 'eye'}
              style={styles.control}
          />
        </TouchableOpacity>
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
   
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => {
           this.onPress()
          }}
          activeOpacity={0.5}>
          {this.props.isLoading === true  ? (
                <ActivityIndicator color={'white'} />
              ) : (
                <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.change_pass_button}>Change your password</Text>
        </TouchableOpacity>
      </View>
  );
} 
};

export default Login;
