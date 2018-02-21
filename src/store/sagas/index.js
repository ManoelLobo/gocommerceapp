import { takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as CategoryProductsTypes } from 'store/ducks/category-products';

import { getCategories } from './categories';
import { getCategoryProducts } from './category-products';

export default function* root() {
  yield [
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoryProductsTypes.CATEGORY_PRODUCTS_REQUEST, getCategoryProducts),
  ];
}
