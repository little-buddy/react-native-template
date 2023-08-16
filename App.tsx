/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import 'react-native-devsettings';
import { NavigationContainer } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LanguageProvider } from '@/locales/component';

import RootComponent from '@/routers';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaProvider>
			<LanguageProvider>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}
				/>

				<NavigationContainer>
					<RootComponent />
				</NavigationContainer>
			</LanguageProvider>
		</SafeAreaProvider>
	);
}

export default App;
