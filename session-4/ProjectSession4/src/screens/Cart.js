import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {DummyProducts} from '../data/index';

const Cart = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {DummyProducts.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetail', {
                productId: val.id,
              })}>
              <View>
                <Image style={styles.productImg} source={{
                  uri: val.img,
                }} />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{val.name}</Text>
                <Text style={styles.productPrice}>{val.price}</Text>
                <Text>Qty : 1</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View>
        <Text style={styles.Total}>Total : Rp. 3.000.000</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  productName: {
    fontSize: 10,
  },
  productDesc: {
    fontSize: 10,
    width: 290,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    
  },
  productImg: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  Total: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    alignContent: 'center',
    textAlign: 'center',
    padding: 15,
  },
});
export default Cart;