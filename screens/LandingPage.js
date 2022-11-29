import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

//import Ionicons from 'C:/ictproject/passthepigsgame/node_modules/react-native-vector-icons/Ionicons';

const LandingPage = ({ navigation }) => {

  return (
      <SafeAreaView style={style.container}>
        <View style={style.maincontainer}>
            <Text style={[style.gameGuide]}> How to play: Open camera and find out! </Text>
              </View>
                <View style={style.iconWrapper}>
                  <TouchableOpacity
                  onPress = {() => navigation.navigate('CameraSite')}
                  activeOpacity={0.5}>
                <Image
                source={require('C:/myreactnativeapps/passthepigsgame/assets/images/cameraicon.png')}
                style={style.buttonPlay} />    
                </TouchableOpacity>
        </View>
      </SafeAreaView>

    );

};

export default LandingPage;


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

  iconWrapper: {
    width: 500,
    height: 300,
  },

  gameGuide: {
    fontSize: 20,
    fontWeight: '100',
    fontWeight: 'bold',
    color: 'darkgreen',
  },

  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    width: 150,
    height: 75,
  },

});