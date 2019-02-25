/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import FavoritePage from "./FavoritePage";
import MyPage from "./MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";


type Props = {};
export default class HomePage extends Component<Props> {

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
