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


type Props = {};
const KEY = 'save_key';
export default class AsyncStorageDemo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ''
        }

    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>AsyncStorage 使用</Text>

                <TextInput style={styles.input}
                           onChangeText={text => {
                               this.value = text;

                           }}
                />
                <View style={styles.input_container}>
                    <Text onPress={() => {
                        this.doSave();
                    }}>存储</Text>
                    <Text onPress={() => {
                        this.doRemove();
                    }}>删除</Text>
                    <Text onPress={() => {
                        this.getData();
                    }}>读取</Text>
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }

    doSave() {
        AsyncStorage.setItem(KEY, this.value, error => {
            error && console.log(error.toString())
        })
    }

    doRemove() {
        AsyncStorage.removeItem(KEY,error => {
            error && console.log(error.toString())
        })
    }

    getData() {
        AsyncStorage.getItem(KEY, (error, value) => {
            this.setState({
                showText: value
            })
            console.log(value);
            error && console.log(error.toString())
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
        justifyContent:'space-around'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    }
});
