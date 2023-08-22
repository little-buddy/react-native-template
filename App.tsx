/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { Provider as ReactReduxProvider } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-devsettings';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <NavigationContainer>
            <RootComponent />
          </NavigationContainer>
        </PersistGate>
      </ReactReduxProvider>
    </SafeAreaProvider>
  );
}

export default App;
