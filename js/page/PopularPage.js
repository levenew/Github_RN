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
    createMaterialTopTabNavigator,
    createAppContainer
} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import FetchDemo from "./FetchDemo";

type Props = {};
export default class PopularPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP'];
    }

    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: PopularTab,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs;
    }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this._genTabs(), {
            tabBarOptions: {
                tabStyle: styles.tabStyle,
                upperCaseLabel: false,
                scrollEnabled: true,
                style: {
                    backgroundColor: '#678'
                },
                indicatorStyle: styles.indicatorStyle
            }
        }))
        return (<View style={{flex: 1}}>
            <TabNavigator/>
        </View>);
    }
}

class PopularTab extends Component<Props> {
    render() {
        const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'DetailPage');
                }}>跳转到详情页</Text>

                <Button
                    title={'Fetch 使用'}
                    onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, 'FetchDemo');
                }}/>

                <Button
                    title={'AsyncStorage 使用'}
                    onPress={() => {
                        NavigationUtil.goPage({
                            navigation: this.props.navigation
                        }, 'AsyncStorageDemo');
                    }}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabStyle: {
        minWidth: 30
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    }
});
