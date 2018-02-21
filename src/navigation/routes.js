import { StackNavigator, TabNavigator } from 'react-navigation';

import Main from 'pages/Main';
import Detail from 'pages/Detail';
import Cart from 'pages/Cart';

import Footer from 'components/Footer';

const ProductRoutes = StackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
});

const Routes = TabNavigator({
  Main: { screen: ProductRoutes },
  Cart: { screen: Cart },
}, {
  swipeEnabled: true,
  animationEnabled: false,
  lazy: false, // BUG? lazy loading not working
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
