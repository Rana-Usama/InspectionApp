import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function RepairScreen(props) {


    const data = [
        {
            title1: 'Requested By',
            title2: 'Jhon Doe'
        },
        {
            title1: 'Flat / Building no',
            title2: 'Unit 102, Brig A'
        },
        {
            title1: 'Address',
            title2: 'St Abu Dabhi'
        },
        {
            title1: 'Tel./ Mobile',
            title2: '092839203789'
        },
        {
            title1: 'Requested To',
            title2: 'Gold Maintenance'
        },
        {
            title1: 'Tenant / Owner',
            title2: 'Jhon Doe'
        },
        {
            title1: 'Date',
            title2: '10/10/2021'
        },
    ]

    const imagesData = [
        {
            image1: require('../../assets/images/pic.png'),
            image2: require('../../assets/images/pic.png'),
            image3: require('../../assets/images/pic.png'),
        },
        {
            image1: require('../../assets/images/pic.png'),
            image2: require('../../assets/images/pic.png'),
            image3: require('../../assets/images/pic.png'),
        },

    ]

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Issues",
            multipleLines: true,
            height: RFPercentage(7),
            value: "",
        },
        {
            placeholder: "Request",
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
        <Screen style={styles.screen}>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={styles.navContainer} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6) }} >
                            Repair Request
                        </Text>
                        <View style={{ marginTop: RFPercentage(2), width: '100%' }} >
                            <View style={styles.highPriorityText} >
                                <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                                    High Priority
                                </Text>
                            </View>
                            <Text style={styles.statusText} >
                                Status
                            </Text>
                        </View>
                    </View>

                    {/* Input field */}
                    {inputField.map((item, i) => (
                        <View key={i} style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            <View style={{ marginTop: i == 0 ? RFPercentage(4) : RFPercentage(1) }} >
                                <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                                    {item.placeholder}
                                </Text>
                                <InputField
                                    placeholderColor={Colors.darkGrey}
                                    height={item.height}
                                    backgroundColor={'#fff'}
                                    multipleLines={item.multipleLines}
                                    borderWidth={RFPercentage(0.2)}
                                    borderColor={Colors.black}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1.4)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"92%"}
                                />
                            </View>
                        </View>
                    ))}

                    <View style={styles.photoContainer} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: 'bold' }} >
                            Photos
                        </Text>
                    </View>

                    <View style={styles.imagesContainer} >

                        {imagesData.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.7), width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={styles.images} source={item.image1} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={styles.images} source={item.image2} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} >
                                    <Image style={styles.images} source={item.image3} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    <View style={styles.buttonContainer}>
                        <MyAppButton
                            title="Add Photos"
                            padding={RFPercentage(1.2)}
                            onPress={() => props.navigation.navigate("TakePhotoScreen")}
                            backgroundColor={Colors.brown}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={RFPercentage(16)}
                        />
                    </View>

                    {data.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(4) : 0, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                            <View style={{ marginTop: i == 4 ? RFPercentage(10) : RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.8) }} >
                                    {item.title1}
                                </Text>
                                <View style={styles.dataSubContainer} >
                                    <Text style={styles.dataText} >
                                        {item.title2}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}

                    <View style={styles.submitContainer}>
                        <MyAppButton
                            title="Submit"
                            padding={RFPercentage(1.2)}
                            onPress={() => props.navigation.navigate("TakePhotoScreen")}
                            backgroundColor={Colors.brown}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={RFPercentage(16)}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(10) }} />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },
    navContainer: {
        marginTop: RFPercentage(3),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    highPriorityText: {
        backgroundColor: Colors.brown,
        width: RFPercentage(15),
        height: RFPercentage(4.2),
        borderRadius: RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        position: 'absolute',
        right: 0,
        color: Colors.darkGrey,
        fontSize: RFPercentage(1.8)
    },
    photoContainer: {
        marginTop: RFPercentage(3),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagesContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: RFPercentage(2)
    },
    images: {
        width: RFPercentage(16),
        height: RFPercentage(16),
        borderRadius: RFPercentage(1.2)
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: RFPercentage(4)
    },
    dataSubContainer: {
        borderRadius: RFPercentage(0.8),
        position: 'absolute',
        right: 0,
        backgroundColor: Colors.grey,
        width: RFPercentage(28),
        height: RFPercentage(5.5),
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    dataText: {
        marginLeft: RFPercentage(1.2),
        color: Colors.black,
        fontSize: RFPercentage(2)
    },
    submitContainer: {
        width: "100%",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: RFPercentage(6)
    }
})

export default RepairScreen;