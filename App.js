import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {MaterialIcons, Ionicons} from '@expo/vector-icons';

//tab
import HomeScreen from './screens/home';
import CartScreen from './screens/cart';
import CalcScreen from './screens/calc';
import MyScreen from './screens/my';

//stack
import DetailScreen from './screens/detail';  
import PopScreen from './screens/pop';



const RootTab = () => {
  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({focused, color, size}) => {
          switch(route.name) {
            case "Home":
              return <MaterialIcons name="home" size={size} color={color} />;
            case "Cart":
              return <MaterialIcons name="card-giftcard" size={size} color={color} />;
            case "Calc":
              return <Ionicons name="ios-calculator" size={size} color={color} />;
            case "My":
              return <MaterialIcons name="account-box" size={size} color={color} />;
          }

        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Calc" component={CalcScreen} />
      <Tab.Screen name="My" component={MyScreen} />
    </Tab.Navigator>
  )
}; 

const RootStack = () => {
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootTab} options={{headerShown: false}} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}} />
      <Stack.Screen name="Pop" component={PopScreen}  options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

