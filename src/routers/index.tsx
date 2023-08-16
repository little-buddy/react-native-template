import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './config';
import i18n from '@/locales';
import { useEffect } from 'react';
import { useLang } from '@/locales/componentRedux';

const Tab = createBottomTabNavigator();

export default () => {
  /* Do it. */
  useEffect(() => {
    /* 关闭加载页 */
  }, []);

  useLang();
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
