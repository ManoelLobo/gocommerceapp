import 'config/ReactotronConfig';
import React from 'react';
import Navigator from 'navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <Navigator />
    </PersistGate>
  </Provider>
);

export default App;
