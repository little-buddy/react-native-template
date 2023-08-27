/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { Provider as ReactReduxProvider } from 'react-redux';
// @ts-ignore
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-devsettings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from 'redux-persist/integration/react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import RootComponent from '@/routers';
import { persistor, store } from '@/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <ReactReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <NavigationContainer>
              <RootComponent />
            </NavigationContainer>
          </GestureHandlerRootView>
        </PersistGate>
      </ReactReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
