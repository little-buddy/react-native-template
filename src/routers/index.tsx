import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './config';
import i18n from '@/locales';
import { useContext } from 'react';
import { LanguageContext } from '@/locales/component';

const Tab = createBottomTabNavigator();

export default () => {
	useContext(LanguageContext);
	return (
		<Tab.Navigator>
			{routes.map(({ name, component }) => (
				<Tab.Screen
					name={name}
					options={{
						title: i18n.t(name),
					}}
					component={component}
					key={name}
				/>
			))}
		</Tab.Navigator>
	);
};
