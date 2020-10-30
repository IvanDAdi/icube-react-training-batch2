import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetails';

const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Product List' }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }}/>
    </Stack.Navigator>
  )
}

export default HomeStack