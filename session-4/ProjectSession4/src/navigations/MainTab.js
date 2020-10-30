import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack'
import CategoryStack from './CategoryStack'
import CartStack from './CartStack'

const Tab = createBottomTabNavigator();


const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryStack} />
      <Tab.Screen name="Cart" component={CartStack} />
    </Tab.Navigator>
  )
}

export default MainTab