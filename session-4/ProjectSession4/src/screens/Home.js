import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DummyProducts} from '../data/index';
import {DummyBanner} from '../data/index';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageScreenTitle}>
        <Text style={styles.Title}>Home</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <ScrollView horizontal>
            <View style={styles.productList}>
              {DummyBanner.map((val, index) => (
                <View key={index}>
                    <Image style={styles.imgBanner} source={{
                      uri: val.img,
                    }} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.Title}>Top Product</Text>
          </View>
          <ScrollView horizontal>
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
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  pageScreenTitle: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
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
  imgBanner: {
    width: win.width,
    height: 350,
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  productItem: {
    width: 150,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "lightblue",
  },
  productInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
  },
  productImg: {
    width: 140,
    height: 150,
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default Home