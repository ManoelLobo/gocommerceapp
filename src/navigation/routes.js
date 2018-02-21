import { StackNavigator, TabNavigator } from 'react-navigation';

import Main from 'pages/Main';
import Detail from 'pages/Detail';
import Cart from 'pages/Cart';

const ProductRoutes = StackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail },
});

const Routes = TabNavigator({
  Main: { screen: ProductRoutes },
  Cart: { screen: Cart },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarPosition: 'bottom',
});

export default Routes;
