// App.js

import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductList />
    </SafeAreaView>
  );
};

export default App;
