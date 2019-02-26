/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//看看Git有效果没有aaa
import {AppRegistry} from 'react-native';
import AppNavigators from './js/navigator/AppNavigators';
import {
    createAppContainer
} from 'react-navigation';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigators));
