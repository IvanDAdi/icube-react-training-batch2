import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../data/index';

const ProductList = ({navigation, route}) => {
  const {categoryName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{categoryName} </Text>
          </View>
          <View style={styles.productList}>
              {DummyProducts.map((val, index) => (
                <View key={index} style={styles.productItem}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetail', {
                        productId: val.id,
                      })
                    }>
                    <Image style={styles.productImg} source={{
                      uri: val.img,
                    }} />
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{val.name}</Text>
                      <Text style={styles.productPrice}>{val.price}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  productItem: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
  },
  productInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
  },
  productImg: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ProductList;