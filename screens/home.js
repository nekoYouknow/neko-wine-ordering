import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

const most = {
    list: [
        {id: 1, thumb: require('../assets/home-wine1.png'), liter: '750ml', info: 'Starmont, Cabernet Sauvignon, Napa Valley', price: '$80.00'},
        {id: 2, thumb: require('../assets/home-wine2.png'), liter: '750ml', info: 'Diamond Mine Red Blend 750 ml', price: '$80.00'},
    ],
};

const saved = {
    list: [
        {id: 1, thumb: require('../assets/home-wine3.png'), liter: '750ml', info: 'Starmont, Cabernet Sauvignon, Napa Valley', price: '$80.00'},
        {id: 2, thumb: require('../assets/home-wine4.png'), liter: '750ml', info: 'Diamond Mine Red Blend 750 ml', price: '$80.00'},
    ]
}



export default function Home({route, navigation}) {
    return(
        <View style={styles.container}>
            {/* header */}
            <ImageBackground style={styles.header} source={require("../assets/home-top.png")} resizeMode="stretch"  >
                <View style={styles.headerInput} >
                    <Ionicons name="ios-search" size={22} color="#707070"  style={{marginHorizontal: 5}}/>
                    <TextInput placeholder="Search" placeholderTextColor="#707070" />
                </View>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* most */}
                <View style={styles.list}>
                    {/* header */}
                    <View style={styles.listHeader}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Most popular</Text>
                        <TouchableOpacity>
                            <Text style={{color: '#919191'}}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    {/* list */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {saved.list.map(item => (
                            <View style={styles.listItem} key={item.id}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Pop', {id: item.id})}>
                                        <Image source={item.thumb} style={{width: 101, height: 258}} />
                                    </TouchableOpacity>
                                    <Ionicons name="ios-flask" style={{marginHorizontal: 3}}/>
                                    <Text>{item.liter}</Text>
                                </View>
                                <Text numberOfLines={3} style={{flex: 1, fontSize: 15}}>{item.info}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>{item.price}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                                        <MaterialCommunityIcons name="plus-circle" size={45} color="#A8003D" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* saved */}
                <View style={styles.list}>
                    {/* header */}
                    <View style={styles.listHeader}>
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Saved</Text>
                        <TouchableOpacity>
                            <Text style={{color: '#919191'}}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    {/* list */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {most.list.map(item => (
                            <View style={styles.listItem} key={item.id}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Pop', {id: item.id})}>
                                        <Image source={item.thumb} style={{width: 101, height: 258}} />
                                    </TouchableOpacity>
                                    <Ionicons name="ios-flask" style={{marginHorizontal: 3}}/>
                                    <Text>{item.liter}</Text>
                                </View>
                                <Text numberOfLines={3} style={{flex: 1, fontSize: 15}}>{item.info}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                                    <Text style={{fontSize: 23, fontWeight: 'bold'}}>{item.price}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Detail', {id: item.id})}>
                                        <MaterialCommunityIcons name="plus-circle" size={45} color="#A8003D" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    }, 
    header: {
        height: 150,
    },
    headerInput: {
        marginTop: 80,
        marginHorizontal: 16,
        height: 48, 
        borderColor: '#7f8c8d',
        borderWidth: 1, 
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(255, 255, 255, .4)',
        flexDirection: 'row',
        alignItems: 'center',

    },
    list: {
        marginBottom: 30,
    },
    listHeader: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    listItem: {
        borderWidth: 1, 
        borderColor: '#ecf0f1', 
        borderRadius: 10,  
        width: 188, 
        marginHorizontal: 16, 
        padding: 16,
    },

});