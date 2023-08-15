/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import 'react-native-devsettings';
import { NavigationContainer } from '@react-navigation/native';
import Example from '@/pages/Example';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<NavigationContainer>
				<Example />
			</NavigationContainer>
		</SafeAreaView>
	);
}

export default App;
