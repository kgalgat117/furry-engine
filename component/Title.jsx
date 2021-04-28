import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constant';


export function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        marginTop: 55,
        borderColor: COLORS.PRIMARY,
        borderWidth: 1
    },
    text: {
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: "#000000a0"
    }
});
