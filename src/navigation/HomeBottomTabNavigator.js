import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 60, backgroundColor: 'black'},
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name={'Discover'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../assets/images/discover.png')}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../assets/images/search.png')}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Add'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../assets/images/add.png')}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../assets/images/cart.png')}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../assets/images/profile.png')}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
