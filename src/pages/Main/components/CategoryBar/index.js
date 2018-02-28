import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import CategoriesActions from 'store/ducks/categories';

import styles from './styles';

class CategoryBar extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loading: PropTypes.bool.isRequired,
    active: PropTypes.number.isRequired,
    setActive: PropTypes.func.isRequired,
  }

  selectCategory = (id) => {
    this.props.setActive(id);
  }

  renderCategory = item => (
    <TouchableOpacity
      style={[
        styles.category,
        (item.id === this.props.active) ? styles.active : {},
      ]}
      onPress={() => { this.selectCategory(item.id); }}
      key={item.id}
    >
      <Text
        style={[
          styles.title,
          (item.id === this.props.active) ? styles.activeTitle : styles.inactiveTitle,
        ]}
      >
        {item.title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )

  renderList = () => (
    <ScrollView
      style={styles.categoryContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {this.props.categories.map(category => (
        this.renderCategory(category)
      ))}
    </ScrollView>

  )

  render() {
    return (
      <View style={styles.container}>
        { this.props.loading ?
          <ActivityIndicator size="small" style={styles.loading} /> :
          this.renderList()
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  loading: state.categories.loading,
  active: state.categories.active,
});

const mapDispatchToProps = dispatch => ({
  setActive: id => dispatch(CategoriesActions.categoriesSetActive(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryBar);
