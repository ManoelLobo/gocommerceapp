import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, View } from 'react-native';

import { connect } from 'react-redux';

// import styles from './styles';

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    })).isRequired,
    loading: PropTypes.bool.isRequired,
  }

  renderProducts = () => (
    this.props.products.length ?
      this.props.products.map(product =>
        <Text key={product.id}>{product.name}, {product.brand}</Text>) :
      <Text>Não há produtos disponíveis nesta seção.</Text>
  )

  render() {
    return (
      <View>
        {this.props.loading ?
          <ActivityIndicator size="small" /> :
          this.renderProducts()
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.categoryProducts.data,
  loading: state.categoryProducts.loading,
});

export default connect(mapStateToProps, null)(ProductList);
