import * as SplashScreen from 'expo-splash-screen';

import {OpenSans_400Regular, OpenSans_700Bold, useFonts} from '@expo-google-fonts/open-sans';

import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import store from './src/store';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}