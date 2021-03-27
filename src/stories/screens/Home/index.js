import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View  style={styles.header} >
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>CAR PARTS</Text>
        </View>
          <View style={styles.headerLeft}>
           <TouchableOpacity>
           <Ionicons
                active
                size={30}
                color={'#ffffff'}
                name="notifications"
                style={styles.checkIcon}
              />
           </TouchableOpacity> 
          <TouchableOpacity>
          <Entypo
                active
                size={35}
                color={'#ffffff'}
                name="shopping-cart"
                style={styles.checkIcon}
              />
          </TouchableOpacity>
          
          </View>
        </View>
        <View  style={styles.body} >
        <ScrollView style={styles.scrollView}>
        {
          [...Array(16)].map((item, key) => {
            // const { folder_name } = item
            return (
              <View key={key} >
                <TouchableOpacity>
                <View style={styles.list}>
                  <View style={styles.ImageLEFT}>
                  <Image
                  style={{width: "100%", height: "100%",borderRadius:10,}}
                  source={{uri: 'https://cdni.autocarindia.com/Galleries/20170222113258_PFD_9363.jpg'}}
                  />
                  </View>
                  <View style={styles.ImageRIGHT}>            
                       <Text>Honda</Text>
                  </View>
                </View>  
                </TouchableOpacity>           
              </View>
            )
          })
        }
        </ScrollView>
        </View>
        <View  style={styles.footer} >
           <TouchableOpacity style={styles.footerL}>
           <Entypo
                active
                size={35}
                color={'#037bfc'}
                name="shop"
              />   
             <Text style={styles.footerText}>My Account</Text>
           </TouchableOpacity> 
           <TouchableOpacity style={styles.footerL}
            //  onPress={() =>
            //     navigation.navigate('')
            //   }
           >
             <FontAwesome5
                active
                size={35}
                color={'#037bfc'}
                name="receipt"
                style={styles.checkIcon}
              />   
            <Text style={styles.footerText}>Orders</Text>
           </TouchableOpacity> 
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 ,
    //marginTop: StatusBar.currentHeight || 0,//this style for avoid statusbar 
  },
  header: {
    width: "100%",
    height: "20%",
    backgroundColor: "#037bfc",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
  },
  headerRight:{
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#ee82ee", 
  },
  ImageRIGHT:{
    width:"50%",
    height :"100%",
    backgroundColor:"#ffebcd"
  },
  headingtext:{
    color: "#ffffff",
    height: 30,
    fontSize:25,
    fontWeight: 'bold',
  },
  list:{
    width: "90%",
    height: 150,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius:10,
    backgroundColor:'#037bfc'
  },
  ImageLEFT:{
    width: "45%",
    height: "100%",
    borderRadius:10,
    backgroundColor: "#ffffff",
  },
  headerLeft:{
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: 'row',
  },
  headerText: {
    color: "#ffffff",
    height: 30,
    fontSize:25,
    fontWeight: 'bold',
  },
  body: {
    width: "100%",
    height: "70%",
    borderColor: '#000000',
    borderWidth:  0.5,
  },
  footer: {
    width: "100%",
    height: "10%",
    flexDirection: 'row',   
  },
  footerL: {
    width: "50%",
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#037bfc",
    fontSize:15,  
  },
});

export default App;
