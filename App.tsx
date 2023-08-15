/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Example from '@/pages/Example';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';

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

			<Example />
		</SafeAreaView>
	);
}

export default App;
