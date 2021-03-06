import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class PopularItem extends Component {
    render() {
        const {item} = this.props;
        if (!item || !item.owner) return null
        let favoriteButton = (
            <TouchableOpacity
                style={{padding: 6}}
                underlayColor={'transparent'}
                onPress={() => {
                }}
            >
                <FontAwesome
                    name={'star-o'}
                    size={26}
                    style={{color:'red'}}
                />

            </TouchableOpacity>
        )
        return (
            <TouchableOpacity
                onPress={this.props.onSelect}
            >
                <View style={style.cell_container}>
                    <Text style={style.title}>
                        {item.full_name}
                    </Text>
                    <Text style={style.description}>
                        {item.description}
                    </Text>
                    <View style={style.row}>
                        <View style={style.row}>
                            <Text>Author:</Text>
                            <Image style={{height: 22, width: 22}}
                                   source={{uri: item.owner.avatar_url}}
                            />

                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Start:</Text>
                            <Text>{item.stargazers_count}</Text>
                        </View>
                        {favoriteButton}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    cell_container: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 5,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121'
    },
    description: {
        fontSize: 14,
        marginBottom: 12,
        color: '#757575',
    }
})
