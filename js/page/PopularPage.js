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
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import FetchDemo from "./FetchDemo";
import {connect} from 'react-redux';
import actions from '../action/index'

type Props = {};
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red'
export default class PopularPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React', 'React Native', 'PHP'];
    }

    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: PopularTabPage,
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

    constructor(prpos) {
        super(prpos)
        const {tabLabel} = this.props;
        this.storeName = tabLabel;
    }

    componentDidMount(): void {
        this.loadData()
    }

    loadData() {
        const {onLoadPopularData} = this.props;
        const url = this.getFetchUrl(this.storeName)
        onLoadPopularData(this.storeName, url)
    }

    getFetchUrl(key) {
        return URL + key + QUERY_STR;
    }

    renderItem(data) {
        const item = data.item
        return (
            <View style={{marginBottom: 10}}>
                <Text style={{backgroundColor: '#faa'}}>
                    {JSON.stringify(item)}

                </Text>

            </View>
        )
    }



    render() {
        const {popular} = this.props;
        let store = popular[this.storeName];
        if (!store) {
            store = {
                items: [],
                isLoading: false,
            }
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={store.items}
                    renderItem={data => this.renderItem(data)}
                    keyExtractor={item => "" + item.id}
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    popular: state.popular
});
const mapDispatchToProps = dispatch => ({
    onLoadPopularData:(storeName, url) => dispatch(actions.onLoadPopularData(storeName, url)),
});

//注意：connect只是个function，并不应定非要放在export后面
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)


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
