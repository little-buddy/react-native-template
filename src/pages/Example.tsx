import { PropsWithChildren } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	useColorScheme,
	TouchableHighlight,
} from 'react-native';
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { I18nText, changeLang } from '@/locales/component';

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
}

export default () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={backgroundStyle}
		>
			<Header />
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<I18nText word="China" />
				<TouchableHighlight onPress={() => changeLang('zh-Hans')}>
					<Text>中文</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => changeLang('en')}>
					<Text>英文</Text>
				</TouchableHighlight>
			</View>

			<View
				style={{
					backgroundColor: isDarkMode ? Colors.black : Colors.white,
				}}
			>
				<Section title="Step One">
					Edit <Text style={styles.highlight}>App.tsx</Text> to change this
					screen and then come back to see your edits.
				</Section>
				<Section title="See Your Changes">
					<ReloadInstructions />
				</Section>
				<Section title="Debug">
					<DebugInstructions />
				</Section>
				<Section title="Learn More">
					Read the docs to discover what to do next:
				</Section>
				<LearnMoreLinks />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});
