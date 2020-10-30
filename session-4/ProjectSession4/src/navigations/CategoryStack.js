import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Category from '../screens/Category';

const Stack = createStackNavigator();


const CategoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  )
}

export default CategoryStack