/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, AsyncStorage} from 'react-native';
import DataStore from '../expand/dao/DataStore'

type Props = {};
const KEY = 'save_key';


export default class DataStoreDemoPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ''
        }
        this.dataStore = new DataStore()

    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>离线缓存框架设计</Text>

                <TextInput style={styles.input}
                           onChangeText={text => {
                               this.value = text;

                           }}
                />
                <View style={styles.input_container}>
                    <Text onPress={() => {
                        this.loadData();
                    }}>获取信息</Text>
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }

    loadData() {
        let url = `https://api.github.com/search/repositories?q=${this.value}`
        this.dataStore.fechData(url)
            .then((data) => {
                let showData = `初次数据加载时间:${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`
                this.setState({
                    showText: showData
                })
            }).catch(error => {
                error && console.log(error.toString());
             })
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    }
});
