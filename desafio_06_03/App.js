import * as SplashScreen from 'expo-splash-screen';

import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { store, storePersisted } from './src/store';

import MainNavigator from './src/navigators/MainNavigator';
import { PersistGate } from 'redux-persist/integration/react' // Redux Persist
import { Provider } from 'react-redux';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}