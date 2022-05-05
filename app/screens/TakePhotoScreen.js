import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as ImagePicker from 'expo-image-picker';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function TakePhotoScreen(props) {

    const bottomTabData = [
        {
            title: 'Crop',
            // onPress:''
        },
        {
            title: 'Draw'
        },
        {
            title: 'Color'
        },
        {
            title: 'Text'
        },
        {
            title: 'Line'
        }

    ]

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Comment",
            multipleLines: true,
            height: RFPercentage(7),
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: '100%' }}
            >

                <View style={{ alignSelf: 'center', marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={pickImage} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                            Take Photo
                        </Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: RFPercentage(1.5), width: '100%', flexDirection: 'row', alignItems: 'center' }} >
                        <TouchableOpacity onPress={pickImage} activeOpacity={0.8} >
                            <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2) }} >
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("RepairScreen")} activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                            <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(2) }} >
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <TouchableOpacity activeOpacity={0.6} style={{ alignSelf: 'center', marginTop: RFPercentage(16) }} >
                            <Image source={{ uri: image }} style={{ width: RFPercentage(50), height: RFPercentage(44), borderRadius: RFPercentage(1) }} />
                        </TouchableOpacity>

                        {/* Input field */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(5) }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(0.7) : RFPercentage(0.2) }} >
                                    <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                                        {item.placeholder}
                                    </Text>
                                    <InputField
                                        placeholderColor={Colors.darkGrey}
                                        height={item.height}
                                        multipleLines={item.multipleLines}
                                        backgroundColor={'#FAFAFA'}
                                        borderWidth={RFPercentage(0.2)}
                                        borderColor={'#FAFAFA'}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(1.4)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"92%"}
                                    />
                                </View>
                            ))}
                        </View>

                    </View>
                </ScrollView>

                <View style={{ alignSelf: 'center', position: 'absolute', bottom: RFPercentage(2), width: '84%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    {bottomTabData.map((item, i) => (
                        <TouchableOpacity onPress={i == 0 ? pickImage : null} key={i} activeOpacity={0.8} >
                            <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </KeyboardAvoidingView>
        </Screen>
    );
}

export default TakePhotoScreen;