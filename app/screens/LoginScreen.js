import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Username",
            iconName: 'account-circle',
            value: "",
        },
        {
            placeholder: "Password",
            iconName: 'lock',
            value: "",
            secure: true
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

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

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

            <Text style={{ marginTop: RFPercentage(10), color: Colors.primary, fontSize: RFPercentage(3.5), fontWeight: 'bold' }} >
                LOGO!
            </Text>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <Text style={{ marginTop: RFPercentage(12), color: Colors.primary, fontSize: RFPercentage(4), fontWeight: 'bold' }} >
                        Login
                    </Text>

                    {/* Input field */}
                    <View style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1.8) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.black}
                                    height={RFPercentage(6.8)}
                                    leftIconName={item.iconName}
                                    backgroundColor={Colors.grey}
                                    placeholderAtCenter={true}
                                    borderWidth={RFPercentage(0.2)}
                                    borderColor={Colors.grey}
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
                            title="LOGIN"
                            padding={RFPercentage(1.8)}
                            onPress={() => handleLogin()}
                            backgroundColor={Colors.brown}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1.5)}
                            width={"42%"}
                        />
                    </View>

                </View>
            </ScrollView>

            <View style={{ position: 'absolute', bottom: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '500' }} >
                    Forget Password?
                </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} activeOpacity={0.7} style={{ marginLeft: RFPercentage(0.6) }} >
                    <Text style={{ color: Colors.brown, fontSize: RFPercentage(1.9), fontWeight: 'bold', textDecorationLine: 'underline' }} >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

        </Screen>
    );
}

export default LoginScreen;