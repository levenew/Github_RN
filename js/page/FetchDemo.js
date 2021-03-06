/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';


type Props = {};
export default class FetchDemo extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ''
        }

    }


    loadData(text) {
        //https://api.github.com/search/repositories?q=java
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
        fetch(url)
            .then(response => response.text())
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
    }

    loadData2(text) {
        //https://api.github.com/search/repositories?q=java
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
        fetch(url)
            .then(response => {
                if (response.ok)
                    return response.text();
                throw  new Error('Network response was not ok.')
            })
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
            .catch(e => {
                this.setState({
                    showText: e.toString()
                })
            })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Fetch 使用</Text>
                <View style={styles.input_container}>
                    <TextInput style={styles.input}
                               onChangeText={text => {
                                   this.searchKey = text;

                               }}
                    />
                    <Button
                        title={'获取'}
                        onPress={() => {
                            this.loadData2();
                        }}/>

                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
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
        alignItems: 'center'
    },
    input: {
        height: 40,
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    }
});
