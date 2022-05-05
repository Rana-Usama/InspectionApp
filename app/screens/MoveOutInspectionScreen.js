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

function MoveOutInspectionScreen(props) {

    const tableData = [
        {
            firstTitle: 'ID',
            secondTitle: '1',
            thirdTitle: '2'
        },
        {
            firstTitle: 'Image',
            secondTitle: 'pic',
            thirdTitle: 'pic'
        },
        {
            firstTitle: 'Description',
            secondTitle: 'Piant Defect',
            thirdTitle: 'Broken Marble'
        },
        {
            firstTitle: 'Room',
            secondTitle: 'Living',
            thirdTitle: 'Dining'
        },
        {
            firstTitle: 'Status',
            secondTitle: 'Open',
            thirdTitle: 'Open'
        },
        {
            firstTitle: 'Comments',
            secondTitle: 'Not recified',
            thirdTitle: 'Not recified'
        },
        {
            firstTitle: 'Repair Date',
            secondTitle: '22-Apr-22',
            thirdTitle: '22-Apr-22'
        },
        {
            firstTitle: 'Image',
            secondTitle: 'Pic 1',
            thirdTitle: 'Pic 2'
        },
        {
            firstTitle: 'Remark',
            secondTitle: 'Repair Done',
            thirdTitle: 'Repair Done'
        },
    ]

    const bottomTabData = [
        {
            title: 'Home',
            onPress: 'HomeScreen'
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
        },
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

                    <View style={{ marginTop: RFPercentage(5), width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <ScrollView indicatorStyle='white' horizontal={true} style={{ flex: 1, width: '100%' }} >
                            {tableData.map((item, i) => (
                                <View key={i} style={{ marginLeft: !i == 0 ? RFPercentage(3) : 0, justifyContent: 'center', alignItems: 'flex-start' }} >
                                    <Text style={{ color: Colors.darkGrey }} >
                                        {item.firstTitle}
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(2) }} >
                                        {item.secondTitle}
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(2) }}>
                                        {item.thirdTitle}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                        <MyAppButton
                            title="Add Items"
                            padding={RFPercentage(1.6)}
                            onPress={() => props.navigation.navigate("AddSnagScreen")}
                            backgroundColor={Colors.brown}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={"35%"}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(8) }} />
                </View>
            </ScrollView>

            <View style={{ position: 'absolute', bottom: RFPercentage(2), width: '84%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                {bottomTabData.map((item, i) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate(item.onPress)} key={i} activeOpacity={0.8} >
                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9) }} >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Screen >
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

export default MoveOutInspectionScreen;