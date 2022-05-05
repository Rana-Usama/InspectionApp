import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function HomeScreen(props) {

    const buttonsData = [
        {
            title: 'Move-in Inspection',
            onPress: 'CreateNewInspectionScreen'
        },
        {
            title: 'Move-out Inspection',
            onPress: 'MoveOutInspectionScreen'
        },
        {
            title: 'Periodic Inspection',
            onPress: 'CreateNewInspectionScreen'
        },
        {
            title: 'Repair Request',
            onPress: 'RepairScreen'
        },
    ]

    const bottomTabData = [
        {
            title: 'About us',
            // onPress:''
        },
        {
            title: 'Tutorials'
        },
        {
            title: 'Files'
        },
        {
            title: 'Settings'
        },
        {
            title: 'Contact'
        }
    ]

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <View style={{ marginTop: RFPercentage(2.5), width: '86%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} >
                <Text style={{ fontWeight: 'bold', color: Colors.black, fontSize: RFPercentage(2.4) }} >
                    Jhon Doe!
                </Text>
            </View>

            {/* Logo */}
            <Image style={{ marginTop: RFPercentage(1), width: RFPercentage(28), height: RFPercentage(25) }} source={require('../../assets/images/logo.jpg')} />

            {/* Buttons Mapping */}
            {buttonsData.map((item, i) => (
                <View key={i} style={{ width: "100%", alignItems: "center", marginTop: i == 0 ? RFPercentage(4) : RFPercentage(3.9) }}>
                    <MyAppButton
                        title={item.title}
                        padding={RFPercentage(2)}
                        onPress={() => props.navigation.navigate(item.onPress)}
                        backgroundColor={Colors.brown}
                        color={Colors.white}
                        bold={false}
                        borderRadius={RFPercentage(1.5)}
                        width={"65%"}
                    />
                </View>
            ))}

            <View style={{ position: 'absolute', bottom: RFPercentage(2), width: '84%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                {bottomTabData.map((item, i) => (
                    <TouchableOpacity key={i} activeOpacity={0.8} >
                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Screen>
    );
}

export default HomeScreen;