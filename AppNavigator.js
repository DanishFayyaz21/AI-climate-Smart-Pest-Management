import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignupScreen from './src/signup';
import HomeScreen from './src/homeScreen';
import FarmSection from './src/farmSection';
import DetectedPests from './src/detectedPests';
import UsedPesticides from './src/usedPesticides';
import UserPanel from './src/userPanel';
import UserPanel2 from './src/userPanel2';
import VisionCameraScreen from './src/visionCamera';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Signup'>
            <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='farmSection' component={FarmSection} options={{ headerShown: false }} />
            <Stack.Screen name='detectedPests' component={DetectedPests} options={{ headerShown: false }} />
            <Stack.Screen name='usedPesticides' component={UsedPesticides} options={{ headerShown: false }} />
            <Stack.Screen name='userPanel' component={UserPanel} options={{ headerShown: false }} />
            <Stack.Screen name='userPanel2' component={UserPanel2} options={{ headerShown: false }} />
            <Stack.Screen name='VisionCameraScreen' component={VisionCameraScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};
export default AppNavigator;