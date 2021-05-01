import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '../component';



export default function Register() {

    const image = { uri: "https://picsum.photos/id/1036/900/1100?blur" };
    const currentUser = useSelector(state => state.currentUser)

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
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    upperCard: {
        flex: 1.5,
    },
    lowerCard: {
        flex: 3,
        backgroundColor: "white",
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
    }
});
