import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';


export default function Splash(props) {

    const currentUser = useSelector(state=> state.currentUser)

    useFocusEffect(useCallback(() => {
        let navigate = "Home"
        if(!currentUser.status){
            navigate = "Login"
        }
        props.navigation.navigate(navigate)
    }, []))

    return (
        <View style={styles.container}>
            <Text>This is Splash Screen</Text>
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
