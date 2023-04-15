import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useContext} from 'react';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import { AuthProvider } from '../navigation/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  const {user, logout} = useContext(AuthContext,AuthProvider);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to Profiles"
      />
      <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
       <Text style={styles.email}>Email:{user.email}</Text>
       <Text style={styles.id}>User Id {user.uid}</Text>
       <FormButton buttonTitle='Logout' onPress={()=>logout()}/>
     </View>
    </View>
  );
} 

const HomeScreen = () => {
  //const {user, logout} = useContext(AuthContext,AuthProvider);
  //return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Welcome to Home Screen!</Text>
    //   <Text style={styles.email}>Email:{user.email}</Text>
    //   <Text style={styles.id}>User Id {user.uid}</Text>
    //   <FormButton buttonTitle='Logout' onPress={()=>logout()}/>
    // </View>)
  return(
    <NavigationContainer independent={true}>
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'f9fafd',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    text:{
        fontSize: 20,
        color: '#000',
        marginTop:20,
        fontWeight:'bold',
    },
    email:{
      fontSize:28,
      color:'white',
      marginTop:20,
      backgroundColor:'black',
      padding: 10
      
    },
    id:{
      fontSize:18,
      color:'red',
      padding:10,
      marginTop:20,
      backgroundColor:'yellow'
    }
})