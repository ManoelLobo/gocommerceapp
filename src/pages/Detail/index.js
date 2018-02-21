import React from 'react';
import { View, Text } from 'react-native';

import Header from 'components/Header';

import styles from './styles';

const Detail = () => (
  <View style={styles.container}>
    <Header title="Detalhes do produto" />
    <Text>Details</Text>
  </View>
);

export default Detail;
