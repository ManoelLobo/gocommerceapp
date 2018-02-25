import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Text, View, FlatList } from 'react-native';

import { connect } from 'react-redux';

import ProductCard from './components/ProductCard';

import styles from './styles';

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
      <FlatList
        data={this.props.products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
      /> :
      <Text>Não há produtos disponíveis nesta seção.</Text>
  )

  render() {
    return (
      <View style={styles.container}>
        { this.props.loading ?
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
