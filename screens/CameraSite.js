import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })(); 
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {device != null &&
      hasPermission && (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barcodeText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});



// ALKUPERÄINEN CAMERASITE.JS
// import React, {useState} from 'react';
// import {SafeAreaView } from 'react-native';
// import Camera from './components/Camera';

//  const CameraSite = ({ navigation }) => {


//     return (
//         <>
//           <SafeAreaView styles={{flex:1}}>   
//            <Camera />
//           </SafeAreaView>  
//         </>

//       );
//     };
//     export default CameraSite;



   
    // EKA YRITYS OHJE SIVULTA STE BY STEP GUIDE

// return (

// <View style={styles.screen}>
//   <SafeAreaView style={styles.safeArea}>
//     <View style={styles.topBar}>
//       <Text style={styles.topBarTitleText}>React Native Scanner</Text>
//     </View> 
//   </SafeAreaView>
//   <View style={styles.caption}>
//     <Text style={styles.captionTitleText}> Welcome To React-Native-Camera Tutorial</Text>
//   </View>
//   <RNCamera style={styles.rnCamera} />
//   <View style={styles.cameraControl}>
//     <TouchableOpacity style={styles.btn}>
//       <Text style={styles.btnText}>New QR Scan</Text>
//     </TouchableOpacity>
//   </View>
// </View>
// );
// };
// export default CameraSite;

// const styles = StyleSheet.create({
//     topBar: {
//       height: 50,
//       backgroundColor: '#62d1bc', // green
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     topBarTitleText: {
//       color: '#ffffffff', // white   
//       fontSize: 20,
//     },
//     caption: {
//       height: 120,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     captionTitleText: {
//       color: '#121B0D', // black
//       fontSize: 16,
//       fontWeight: '600',
//     },

//   });