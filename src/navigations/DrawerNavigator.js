import * as React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './StackNavigators';
import {Icon} from 'react-native-elements';
import {colors} from "../global/styles";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator()

const DummyScreen = (props) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  )

  export default function DrawerNavigator(){
    return(
     <Drawer.Navigator
       screenOptions={{
        headerShown:false,
       }}
     >
       
        <Drawer.Screen name="Home" component={HomeStack} />
    
            <Drawer.Screen name="Your Trips">
               {() => <DummyScreen name={"Your Trips"} />}
            </Drawer.Screen>
    
            <Drawer.Screen name="Help">
              {() => <DummyScreen name={"Help"} />}
            </Drawer.Screen>
    
            <Drawer.Screen name="Wallet">
              {() => <DummyScreen name={"Wallet"} />}
            </Drawer.Screen>
    
            <Drawer.Screen name="Settings">
              {() => <DummyScreen name={"Settings"} />}
            </Drawer.Screen>
       
        </Drawer.Navigator>
      

        
    )
}   