import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function CreateNewInspectionScreen(props) {

    const bottomTabData = [
        {
            title: 'Home',
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
            title: 'Export PDF'
        }
    ]

    // Picker
    const [selectedItem, setItem] = useState('');

    const items = [
        { label: "Move-in Inspection", value: "Move-in Inspection" },
        { label: "Move-out Inspection", value: "Move-out Inspection" },
        { label: "Period Inspection", value: "Period Inspection" },
    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Inspection No.",
            value: "",
        },
        {
            placeholder: "Unit No.",
            value: "",
        },
        {
            placeholder: "Level",
            value: "",
        },
        {
            placeholder: "Building No.",
            value: "",
        },
        {
            placeholder: "Address",
            value: "",
        },
        {
            placeholder: "Tenant/Owner",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        props.navigation.navigate("HomeScreen")
        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Picker */}
                    <View style={{ marginTop: RFPercentage(1), width: '87%', alignItems: 'center', justifyContent: 'center' }}>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: Colors.black }}
                            mainComponentStyle={styles.mainComponentStyle}
                            modalComponentStyle={styles.modalComponentStyle}
                            iconComponent={iconComponent}
                            placeholderStyle={{ color: "black", fontSize: RFPercentage(2.2) }}
                            textStyle={styles.modalTextStyle}
                            items={items}
                            setItem={setItem} selectedItem={selectedItem}
                            placeholder="Inspection Type"
                            modalMarginTop={"70%"}
                        />
                    </View>

                    {/* Input field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(0.7) : RFPercentage(0.2) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.darkGrey}
                                    height={RFPercentage(6.8)}
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

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                        <MyAppButton
                            title="Add Items"
                            padding={RFPercentage(1.8)}
                            // onPress={() => handleLogin()}
                            backgroundColor={Colors.brown}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={"42%"}
                        />
                    </View>

                </View>
            </ScrollView>

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

const styles = StyleSheet.create({
    mainComponentStyle: {
        width: "100%",
        borderWidth: 0,
        backgroundColor: "#FAFAFA",
        height: RFPercentage(6.9),
        marginTop: RFPercentage(3)
    },
    modalComponentStyle: {
        borderRadius: RFPercentage(2.3),
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: RFPercentage(0.3)
    },
    textStyle: {
        color: Colors.black,
        fontSize: RFPercentage(2.4),
        fontWeight: 'bold',
        bottom: RFPercentage(1.8)
    },
})

export default CreateNewInspectionScreen;