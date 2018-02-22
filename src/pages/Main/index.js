import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Header from 'components/Header';
import CategoryBar from 'pages/Main/components/CategoryBar';
import ProductList from 'pages/Main/components/ProductList';

import { connect } from 'react-redux';
import CategoriesActions from 'store/ducks/categories';
import CategoryProductsActions from 'store/ducks/category-products';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    categoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
      active: PropTypes.number,
    }).isRequired,
    categoryProductsRequest: PropTypes.func.isRequired,
  }

  async componentDidMount() {
    try {
      await this.props.categoriesRequest();
      await this.props.categoryProductsRequest(this.props.categories.active);
    } catch (err) {
      console.tron.log({ erro: err.message });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories.active !== this.props.categories.active) {
      this.props.categoryProductsRequest(nextProps.categories.active);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="GoCommerce" />

        <CategoryBar />

        <ProductList />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.categoryProducts.data,
});

const mapDispatchToProps = dispatch => ({
  categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest()),
  categoryProductsRequest: category =>
    dispatch(CategoryProductsActions.categoryProductsRequest(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
