import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width:20,
      height:30,

    },
    Login: {
      height: 30,
      fontSize:20,
      fontWeight:'bold',
      marginBottom:20,
      color:"#050505", 
    },
    inputView: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      borderWidth:  0.5,
      borderColor:"#828282",
      width: "90%",
      height: 50,
      marginBottom: 35,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 20,
      marginLeft: '65%',
      fontSize:12,
      marginBottom: 10,
      color:"#3f5c75",
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#218f61",
    },
    loginText: {
      color: "#ffffff"
    },
    control: {
        fontSize: 15,
        padding: 5,
        
      },
    change_pass_button:{
      height: 20,
      fontSize:12,
      marginTop: 10,
      color:"#3f5c75",
    }
  });
  export default styles