import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Image, Pressable, Alert
} from 'react-native';
import Input from '../components/Input';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const onSubmitLogin = () => {

        if (!email || !password) {
            Alert.alert("Please fill Email & Password")
        }
        else if (email !== "reactnative@jetdevs.com" && password !== "jetdevs@123") {
            Alert.alert("Please enter correct Email & Password")
        }
        else if (email === "reactnative@jetdevs.com" && password === "jetdevs@123") {
            navigation.navigate('Dashboard')
        }
    }

    const Divider = () => (
        <View style={{ marginVertical: 20 }} />
    )



    return (
        <>
            <View style={[styles.container, styles.center]}>
                <View style={[styles.loginCard, styles.shadow]} >
                    <View style={[styles.logoView, styles.center]} >
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                        />
                    </View>

                    <View style={styles.formView} >

                        <Text style={styles.headerText} >
                            LOGIN
                        </Text>

                        <Input
                            leftIcon={require('../assets/images/mail.png')}
                            placeholder={"Email"}
                            onChangeValue={(value) => setEmail(value)}
                        />

                        <Divider />

                        <Input
                            leftIcon={require('../assets/images/lock.png')}
                            placeholder={"Password"}
                            isSecureField={true}
                            onChangeValue={(value) => setPassword(value)}
                        />

                        <Divider />

                        <Pressable
                            style={[styles.button, styles.center,
                            {
                                backgroundColor: (!email || !password)
                                    ? '#acacac'
                                    : '#fc7676'
                            }]}
                            onPress={onSubmitLogin}
                        >
                            <Text style={styles.buttonText} >
                                LOGIN
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#c1c1c1'
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    loginCard: {
        width: '90%',
        height: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 50
    },

    logoView: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        zIndex: 1,
        top: -40,
        alignSelf: 'center'
    },

    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },

    headerText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 25
    },

    formView: {
        flex: 1,
        borderRadius: 10,
        paddingTop: 70,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '7%'
    },

    button: {
        width: '100%',
        height: 50,
        borderRadius: 5
    },

    buttonText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#FFF'
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});


export default Login;