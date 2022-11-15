import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//import Ionicons from 'C:/ictproject/passthepigsgame/node_modules/react-native-vector-icons/Ionicons';

const Pigs = ({ navigation }) => {

  return (
    <SafeAreaView style={style.container}>
        <View style={style.maincontainer}>
          <Text style={[style.gameTitle]}> Pass The Pigs Game </Text>
          {/* empty space for image */}
            <View style={style.imageWrapper}>
            <Image
              source={require('C:/myreactnativeapps/passthepigsgame/assets/images/mainimage.png')}
              style={style.mainImage}
              />
            </View>
        <View style={style.iconWrapper}>
            <TouchableOpacity
                onPress = {() => navigation.navigate('LandingPage')}
                activeOpacity={0.5}>
                <Image
                    source={require('C:/myreactnativeapps/passthepigsgame/assets/images/play.png')}
                    style={style.buttonPlay} />    
            </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>

);

};


export default Pigs;



const style = StyleSheet.create({
     container: {
     backgroundColor: '#FADBD8',
     flex: 1,
    },

     maincontainer: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-start',
     marginTop: 50,
    },

    gameTitle:{
     fontSize: 40,
     fontWeight: '500',
     color: '#641E16',
    },

    imageWrapper: {
     width: 400,
     height: 400,
    },


    iconWrapper: {
     width: 500,
     height: 300,
    },

    buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '19.5%',
    width: 300,
    height: 150,
 },

    mainImage: {
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: '10%',
    width: 300,
    height: 300,
 }
 
});

