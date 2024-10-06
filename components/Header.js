

import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/header.PNG')} 
        style={styles.image}
      />
      <Text style={{justifyContent:'center',alignItems:'center'}}> Bạn có thắc mắc về sản phẩm vừa xem đừng ngại chat với shop </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%', 
    height: 50,  
    resizeMode: 'contain', 
  },
});

export default Header;
