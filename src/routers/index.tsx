/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './config';
import i18n from '@/locales';
import { useCallback, useEffect } from 'react';
import { useLang } from '@/locales/componentRedux';
import { AntdIcon } from '@/components/Icon';
import { RouteTabIcon } from '@/constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFound from '@/pages/NotFound';

const Tab = createBottomTabNavigator();

const TabPage = () => {
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

const AppStack = createNativeStackNavigator();

export default () => (
  <AppStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign: 'center',
    }}
  >
    <AppStack.Screen
      name="Home"
      component={TabPage}
      options={{
        headerShown: false,
      }}
    />
    <AppStack.Screen
      name="NotFound"
      component={NotFound}
      options={{
        headerShown: false,
      }}
    />
  </AppStack.Navigator>
);
