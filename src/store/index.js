import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

// Reducers
import navReducer from 'navigation/reducer';
import { reducer as categories } from './ducks/categories';
import { reducer as categoryProducts } from './ducks/category-products';
import { reducer as cart } from './ducks/cart';

import configureStore from './configureStore';
import rootSaga from './sagas';


export default () => {
  const reducers = {
    nav: navReducer,
    categories,
    categoryProducts,
    cart,
  };

  const rootReducer = persistCombineReducers({
    key: '@GoCommerce',
    storage,
    whitelist: ['cart'],
  }, reducers);

  return configureStore(rootReducer, rootSaga);
};
