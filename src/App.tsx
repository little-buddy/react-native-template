/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import '@/components/Icon';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Provider as ReactReduxProvider } from 'react-redux';
// @ts-ignore
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import RootComponent from '@/routers';
import { persistor, store } from '@/store';
import { globalStyle } from '@/style';

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <ReactReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={globalStyle.flex1}>
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
