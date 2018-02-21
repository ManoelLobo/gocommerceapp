import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/category-products';

export function* getCategoryProducts({ category }) {
  const response = yield call(api.get, `/category_products/${category}`);

  if (response.ok) {
    yield put(ActionCreators.categoryProductsSuccess(response.data.products));
  } else {
    yield put(ActionCreators.categoryProductsFailure());
  }
}
