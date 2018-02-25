import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity } from 'react-native';

import { brl } from 'utils/money';

import styles from './styles';

const ProductCard = ({ product }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: `${product.image}` }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.brand}>{product.brand}</Text>
    <Text style={styles.price}>{brl(product.price)}</Text>
  </TouchableOpacity>
);

ProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default ProductCard;
