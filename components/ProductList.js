// components/ProductList.js

import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './Header';

const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Devano',
    image: require('../assets/product1.PNG')
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'Minh Long',
    image: require('../assets/product2.PNG')
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shopName: 'Đồ chơi ',
    image: require('../assets/product3.PNG')
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shopName: 'Đồ chơi',
    image: require('../assets/product4.PNG')
  },
  {
    id: '5',
    name: 'Lãnh đạo đơn giản ',
    shopName: 'Sách hay',
    image: require('../assets/product4.PNG')
  },
  {
    id: '6',
    name: 'Hiểu lòng trẻ con',
    shopName: 'Sách hay',
    image: require('../assets/product5.PNG')
  },
  
];

const ProductList = () => {
  // <View>
  //  <Image source={require('../assets/header.PNG')} />
  // </View>
  const renderItem = ({ item }) => (
    
    <View style={styles.productContainer}>
      <Image source={item.image}  style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.nameshop}>
        <Text>Shop:</Text>
        <Text style={styles.shopName}>{item.shopName}</Text>

        </View>
        
 
      </View>
      <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>CHAT</Text>
        </TouchableOpacity>
    </View>
  );

  return ( 
    <View>
    <Header/>
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 1,
    padding: 5,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 70,
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 11,
    
  },
  nameshop:{
    justifyContent:'left',
    flexDirection:'row',
    

  },
  shopName: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  chatButton: {
    height:30,
    marginTop:8,
    padding: 20,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'red',
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductList;
