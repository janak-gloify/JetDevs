import { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image
} from 'react-native';



const Input = ({ leftIcon, placeholder, isSecureField, onChangeValue }) => {

    const [isFocused, setIsFocused] = useState(false)

    const onFocus = () => {
        setIsFocused(true)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    return (
        <>
            <View style={[styles.inputView, { borderColor: !isFocused ? '#acacac' : '#fc7676' }]} >
                <View style={styles.iconsView} >
                    <Image
                        style={[styles.icon, { tintColor: !isFocused ? '#acacac' : '#fc7676' }]}
                        source={leftIcon}
                    />
                </View>
                <TextInput
                    placeholder={placeholder}
                    style={styles.inputBox}
                    placeholderTextColor="#acacac"
                    secureTextEntry={isSecureField}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={onChangeValue}
                />
            </View>
        </>
    )

}

const styles = StyleSheet.create({

    inputView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        alignItems: 'center'
    },

    iconsView: {
        height: 50,
        marginRight: 10,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },

    inputBox: {
        flex: 1,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        height: '100%'
    }
});

export default Input;