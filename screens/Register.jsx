import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ActionStrings } from '../action';
import { Button, Input } from '../component';
import { COLORS } from '../constant';



export default function Register(props) {

    const image = { uri: "https://picsum.photos/id/1036/900/1100?blur" };
    const currentUser = useSelector(state => state.currentUser)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const defaultState = { name: '', phone: '', password: '' }

    const redirectToLogin = () => {
        dispatch({ type: ActionStrings.USER_SIGN_UP_DATA_UPDATE, payload: defaultState })
        props.navigation.navigate("Login", {})
    }

    const registerUser = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            redirectToLogin()
        }, 2000)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.upperCard}>
                    </View>
                    <View style={styles.lowerCard}>
                        <Text style={styles.headerTitle}>Create Account</Text>
                        <Input value={currentUser.name} fieldName="name" placeHolder="Name" ></Input>
                        <Input value={currentUser.phone} keyboardType="phone-pad" fieldName="phone" placeHolder="Phone" ></Input>
                        <Input value={currentUser.password} secureTextEntry={true} fieldName="password" placeHolder="Password" ></Input>
                        <Button onPress={registerUser} buttonStyle={styles.button} loading={loading} text="Sign Up" mode="contained"></Button>
                        <Text style={styles.infoText}>Already have an account?
                            <TouchableWithoutFeedback onPress={redirectToLogin}>
                                <Text style={styles.signInText}> Sign In</Text>
                            </TouchableWithoutFeedback>
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 110,
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    upperCard: {
        flex: 1.5,
    },
    lowerCard: {
        flex: 3,
        backgroundColor: "#ececec",
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 32,
        paddingTop: 10,
        paddingHorizontal: 4,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 40
    },
    infoText: {
        margin: 10,
        textAlign: 'center',
    },
    signInText: {
        color: COLORS.PRIMARY
    }
});
