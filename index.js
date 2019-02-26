/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//看看Git有效果没有aaa
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './js/App'

AppRegistry.registerComponent(appName, () => App);
