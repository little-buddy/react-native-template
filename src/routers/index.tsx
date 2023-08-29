/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './config';
import i18n from '@/locales';
import { useCallback, useEffect } from 'react';
import { useLang } from '@/locales/componentRedux';
import { AntdIcon } from '@/components/Icon';
import { RouteTabIcon } from '@/constants';

const Tab = createBottomTabNavigator();

export default () => {
  /* Do it. */
  useEffect(() => {
    /* 关闭加载页 */
  }, []);

  useLang();

  const screenOptions = useCallback(
    ({ route }: any) => ({
      tabBarIcon: ({ color, size }: any) => {
        return (
          <AntdIcon name={RouteTabIcon[route.name]} size={size} color={color} />
        );
      },
      tabBarActiveTintColor: '#635df7',
      tabBarInactiveTintColor: '#666666',
      headerTitleAlign: 'center' as 'center',
    }),
    []
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {routes.map(({ name, component }) => (
        <Tab.Screen
          name={name}
          options={{
            title: i18n.t(name),
            tabBarHideOnKeyboard: name === 'message',
          }}
          component={component}
          key={name}
        />
      ))}
    </Tab.Navigator>
  );
};
