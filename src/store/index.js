import { combineReducers } from 'redux';

// Reducers
import navReducer from 'navigation/reducer';
import { reducer as categories } from './ducks/categories';
import { reducer as categoryProducts } from './ducks/category-products';

import configureStore from './configureStore';
import rootSaga from './sagas';


export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    categories,
    categoryProducts,
  });

  return configureStore(rootReducer, rootSaga);
};
