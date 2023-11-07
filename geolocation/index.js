/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ReduxApp from './src/store/ReduxApp';

AppRegistry.registerComponent(appName, () => ReduxApp);
