// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   Platform,
//   View,
//   PermissionsAndroid,
//   Alert,
// } from 'react-native';

// import {CameraKitCameraScreen} from 'react-native-camera-kit';

// const CameraPage = ({ navigation }) => {

//   const [isPermitted, setIsPermitted] = useState(false);
//   const [captueImages, setCaptureImages] = useState([]);

//   const requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera permission',
//           message: 'App needs camera permission',
//         },
//       );
//       // if ok
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }

//   };
//   const requestExternalWritePermission = async () => {

//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'External Storage Write Permission',
//           message: 'App needs write permission',
//         },
//       );
//       // If WRITE_EXTERNAL_STORAGE Permission is granted
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       alert('Write permission err', err);
//     }
//     return false;
//   };

//   const requestExternalReadPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         {
//           title: 'Read Storage Permission',
//           message: 'App needs Read Storage Permission',
//         },
//       );
//       // If READ_EXTERNAL_STORAGE Permission is granted
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     } catch (err) {
//       console.warn(err);
//       alert('Read permission err', err);
//     }
//     return false;

//   };
//   const openCamera = async () => {

//     if (Platform.OS === 'android') {
//       if (await requestCameraPermission()) {
//         if (await requestExternalWritePermission()) {
//           if (await requestExternalReadPermission()) {
//             setIsPermitted(true);
//           } else alert('READ_EXTERNAL_STORAGE permission denied');
//         } else alert('WRITE_EXTERNAL_STORAGE permission denied');
//       } else alert('CAMERA permission denied');
//     } else {
//       setIsPermitted(true);
//     }
//   };



//   const onBottomButtonPressed = (event) => {

//     const images = JSON.stringify(event.captureImages);
//     if (event.type === 'left') {
//       setIsPermitted(false);
//     } else if (event.type === 'right') {
//       setIsPermitted(false);
//       setCaptureImages(images);
//     } else {
//       Alert.alert(
//         event.type,
//         images,
//         [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//         {cancelable: false},
//       );
//     }

//   };

//   return (

//     <SafeAreaView style={{flex: 1}}>
//       {isPermitted ? (
//         <View style={{flex: 1}}>
//           <CameraKitCameraScreen
//             // Buttons to perform action done and cancel
//             actions={{
//               rightButtonText: 'Done',
//               leftButtonText: 'Cancel'
//             }}
//             onBottomButtonPressed={
//               (event) => onBottomButtonPressed(event)
//             }

//             flashImages={{
//               // Flash button images
//               on: require('C:/myreactnativeapps/passthepigsgame/assets/images/flashon.png'),
//               off: require('C:/myreactnativeapps/passthepigsgame/assets/images/flashoff.png'),
//               auto: require('C:/myreactnativeapps/passthepigsgame/assets/images/flashauto.png'),
//             }}
//             cameraFlipImage={require('C:/myreactnativeapps/passthepigsgame/assets/images/flip.png')}
//             captureButtonImage={require('C:/myreactnativeapps/passthepigsgame/assets/images/capture.png')}
//           />
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <Text style={styles.titleText}>React Native Camera</Text>
//           <Text style={styles.textStyle}>{captureImages}</Text>
//           <TouchableHighlight
//             onPress={openCamera}
//             style={styles.buttonStyle}
//           >
//             <Text style={styles.buttonTextStyle}>Open Camera</Text>
//           </TouchableHighlight>      
// </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CameraPage;

// const styles = StyleSheet.create({

//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       padding: 10,
//       alignItems: 'center',
//     },
  
//     titleText: {
//       fontSize: 22,
//       textAlign: 'center',
//       fontWeight: 'bold',
//     },
  
//     textStyle: {
//       color: 'black',
//       fontSize: 16,
//       textAlign: 'center',
//       padding: 10,
//       marginTop: 16,  
//     },

//     buttonStyle: {
//       fontSize: 16,
//       color: 'white',
//       backgroundColor: 'green',
//       padding: 5,
//       marginTop: 32,
//       minWidth: 250,
//     },
  
//     buttonTextStyle: {
//       padding: 5,
//       color: 'white',
//       textAlign: 'center',
//     },
  
//   });