import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
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
        <Screen style={styles.screen}>
            <LoadingModal show={indicator} />

            {/* Logo */}
            <Image style={styles.logo} source={require('../../assets/images/logo.jpg')} />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: '100%' }}
            >

                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        <Text style={styles.loginText} >
                            Login
                        </Text>

                        {/* Input field */}
                        <View style={styles.inputFieldsContainer}>
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
                                padding={RFPercentage(1.5)}
                                onPress={() => handleLogin()}
                                backgroundColor={Colors.brown}
                                color={Colors.white}
                                bold={false}
                                borderRadius={RFPercentage(1.5)}
                                width={"28%"}
                            />
                        </View>

                    </View>
                </ScrollView>

                <View style={styles.forgetPassContainer} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9), fontWeight: '500' }} >
                        Forget Password?
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: RFPercentage(0.6) }} >
                        <Text style={styles.registerText} >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    logo: {
        marginTop: RFPercentage(1),
        width: RFPercentage(28),
        height: RFPercentage(25)
    },
    loginText: {
        marginTop: RFPercentage(5),
        color: Colors.primary,
        fontSize: RFPercentage(4),
        fontWeight: 'bold'
    },
    inputFieldsContainer: {
        marginTop: RFPercentage(6),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    forgetPassContainer: {
        position: 'absolute',
        bottom: RFPercentage(3),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    registerText: {
        color: Colors.brown,
        fontSize: RFPercentage(1.9),
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
})

export default LoginScreen;