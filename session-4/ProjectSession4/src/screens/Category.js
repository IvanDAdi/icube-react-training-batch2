import React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyCategory} from '../data/index';


const Category = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {DummyCategory.map((val, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductList', {
                  categoryName: val.name,
                })
              }>
              <Text style={styles.categoryName}>{val.name}</Text>
            </TouchableOpacity>

            {val.child.length > 0 &&
              val.child.map((valchild) => (
                <View key={valchild.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductList', {
                        categoryName: valchild.name,
                      })
                    }>
                    <Text style={styles.categoryChildName}>- {valchild.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        ))}
        <View>
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
  categoryName: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginHorizontal: 0,
    padding: 15,
    paddingHorizontal: 35,
    backgroundColor: 'lightgrey',
    textAlign: 'center',
  },
  categoryChildName: {
    marginHorizontal: 0,
    padding: 10,
    paddingHorizontal: 30,
  },
  customHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 100
  },
});
export default Category;