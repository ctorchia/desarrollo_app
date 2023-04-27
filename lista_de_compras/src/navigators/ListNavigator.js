import * as React from 'react';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

import ListInCart from '../screens/ListInCart'
import ListScreen from '../screens/ListScreen'
import { useWindowDimensions } from 'react-native';

const FirstRoute = () => (
  <ListScreen />
);

const SecondRoute = () => (
  <ListInCart />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    // style={{ backgroundColor: 'tomato' }}
  />
);

export default function TabViewList() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'A COMPRAR' },
    { key: 'second', title: 'EN CARRITO' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}