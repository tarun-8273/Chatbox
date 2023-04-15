import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { GoogleSignin } from '@react-native-community/google-signin';

import messaging from '@react-native-firebase/messaging';

import {requestUserPermission, notificationListener} from '../utils/NotificationService';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLauch] = useState(null);
    let routeName;

    useEffect(()=>{
      // messaging().getToken().then(token=>{
      //   console.log(token)
      // })
      requestUserPermission();
      notificationListener();

        AsyncStorage.getItem('alreadyLaunched').then(value => {
          if(value == null) {
            AsyncStorage.setItem('alreadyLaunched', 'true');
            setIsFirstLauch(true);
          }else{
            setIsFirstLauch(false);
          }
        });

        GoogleSignin.configure({
          webClientId: '930243000277-ib9q2defl8uiign2pnmsqsq3212ql3u2.apps.googleusercontent.com',
        });

    }, []);

    if(isFirstLaunch === null){
        return null;
      }else if (isFirstLaunch == true){
          routeName = 'Onboarding';
      }else{
          routeName='Login';
      }

  return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
        name="Onboarding" 
        component={OnboardingScreen}
        options={{header:()=>null}}
        />
        <Stack.Screen
        name="Login" 
        component={LoginScreen}
        options={{header:()=>null}}
        />
        <Stack.Screen name="Signup" component={SignUpScreen} options={({navigation})=>({
          title: '',
          headerStyle:{
          backgroundColor: '#f9fafd',
          shadowColor: '#f9fafd',
          elevation: 0,
          },
        })}
        />
    </Stack.Navigator>
  )
}

export default AuthStack
