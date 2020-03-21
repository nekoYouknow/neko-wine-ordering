import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


const {width, height} = Dimensions.get('window');

export default function Pop({route, navigation}) {
    const {id} = route.params;
    console.log("id=", id);

    return(
        <ImageBackground
            source={require('../assets/pop-back.png')}
            style={{width, height}}
        >
            <View style={{width, height,backgroundColor: 'rgba(0,0,0, 0.60)'}}>
                {/* header */}
                <View style={{marginTop: 50, paddingHorizontal: 16}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="closecircle" size={35} color="white" />
                    </TouchableOpacity>
                </View>


                <View style={{marginHorizontal: 16}}>
                    <View style={{marginTop: 80}}>
                        <Text style={{color: 'white', fontSize: 45, fontWeight: 'bold'}}>What do wine grapes taste like?</Text>
                        <Text style={{marginTop: 10,  color: '#7f8c8d', fontSize: 16}}>Written by Dan Ho, 14.01.2020</Text>

                        <Text style={{marginTop: 50, color: '#bdc3c7', fontSize: 15,}}>
                            Table grapes--the grapes you can by at 
                            the grocery store and surely have eaten
                            before--are big, crunchy and a bit tart,
                            with thin skins. Wine grapes are smaller,
                            with sweeter flesh but chewier, thicker
                            skins and a higher ratio of skin to push, 
                            and they hav seeds. Wine grapes tend to
                        </Text>
                    </View>

                    <View style={{alignItems: 'center', marginTop: 40}}>
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
                                FINISH READING
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>



        

        </ImageBackground>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });