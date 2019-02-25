/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import AppNavigators from './js/navigator/AppNavigators';
import {
    createAppContainer
} from 'react-navigation';


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigators));
