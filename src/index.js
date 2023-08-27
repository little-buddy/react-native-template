/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import appJson from './app.json';
/**
 * There is no additional configuration required for the web, however,
 * since the Gesture Handler 2.10.0 the new web implementation is enabled by default
 * @see https://docs.swmansion.com/react-native-gesture-handler/docs/installation
 *  */
// import { enableLegacyWebImplementation } from 'react-native-gesture-handler';
// enableLegacyWebImplementation(true); <2.6.0
// enableExperimentalWebImplementation(true); >= 2.6.0 <= 2.10.0

const appName = appJson.name;

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
