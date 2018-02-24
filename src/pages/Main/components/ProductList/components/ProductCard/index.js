import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';

import styles from './styles';

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: `${product.image}` }} style={styles.image} />
    <Text>{product.name}</Text>
    <Text>{product.brand}</Text>
    <Text>{product.price}</Text>
  </View>
);

ProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default ProductCard;
