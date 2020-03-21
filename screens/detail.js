import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const data = {
    id : 1,
    name: "Veuve Clicquot La Grande Dame", 
    thumb: require('../assets/detail-wine.png'),
    country: 'FRANCE', 
    wineType: 'CHAMPAGNE', 
    taste: 'CITRUS, ALMOND, FLORAL', 
    price: '$90.00',
    note: 'La Grande Dame, The prestige cuvee of Veuve Clicquot was created in tribute to Madame Clicquot. The finest expressi ...',
}


export default function Detail({route, navigation}) {
    const {id} = route.params;
    console.log("id=", id);

    return(
        <ImageBackground
            source={require('../assets/detail-top.png')}
            style={{width:'100%', height: 380}}
            imageStyle={{borderBottomLeftRadius: 100}}
        >

            {/* header */}
            <View style={{marginTop: 40, paddingHorizontal: 16}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left-bold-circle" size={35} color="white"  />
                </TouchableOpacity>
            </View>

            {/* title */}
            <View style={{paddingHorizontal: 16}}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}} numberOfLines={2}>{data.name}</Text>
            </View>
            
            {/* wine-pic + info */}
            <View style={{paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', height: 280 }}>
                {/* bottle image */}
                <View>
                    <Image source={require('../assets/detail-wine.png')} style={{width: 130, height: 300}} resizeMode="cover" />
                </View>

                {/* info */}
                <View style={{flex: 1, justifyContent: 'flex-start', paddingHorizontal: 10}}>
                    <View style={{marginVertical: 10, paddingTop: 20}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#7f8c8d'}}>Country</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{data.country}</Text>
                    </View>

                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#7f8c8d'}}>Wine type</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{data.wineType}</Text>
                    </View>

                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#7f8c8d'}}>Taste</Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>{data.taste}</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10}}>
                        <Text style={{fontWeight: 'bold', color: '#7f8c8d'}}>Price</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 30}}>{data.price}</Text>
                    </View>
                </View>
            </View>



            {/* notes */}
            <View style={{paddingHorizontal: 16, backgroundColor: '#ecf0f1'}}>
                <Text style={{marginVertical: 10, fontSize: 25, fontWeight: 'bold', color: '#A8003D'}}>Winemakers Notes</Text>
                <Text style={{fontSize: 16}} numberOfLines={3}>{data.note}</Text>

                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <TouchableOpacity
                        style={{
                        margin: 5,
                        padding: 15,
                        width: '100%',
                        borderRadius: 20,
                        backgroundColor: "#A8003D"
                        }}
                    >
                        <Text style={{ textAlign: "center", color: "#fff" }}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        
        </ImageBackground>
    );
}
