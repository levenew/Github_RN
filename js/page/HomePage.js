/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Platform, StyleSheet, BackHandler} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import actions from "../action";
import {connect} from "react-redux";

type Props = {};

class HomePage extends Component<Props> {
    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }

    componentWillMount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.routes[1].index == 0)
            return false;
        dispatch(NavigationActions.back());
        return true;
    }

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});


export default connect(mapStateToProps)(HomePage)
