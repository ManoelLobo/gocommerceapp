import React from 'react';
import { View, Text } from 'react-native';

import Header from 'components/Header';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <Header title="GoCommerce" />
    <Text>Main</Text>
  </View>
);

export default Main;

