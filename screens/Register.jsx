import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph, DefaultTheme } from 'react-native-paper';
import { COLORS } from '../constant';


export default function Register() {

    const image = { uri: "https://picsum.photos/id/1036/900/1100?blur" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.header}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // backgroundColor: DefaultTheme.colors.primary,
    },
    header: {
        flex: 0.5,
        marginTop: 55,
        borderColor: COLORS.PRIMARY,
        borderWidth: 1
    },
    body: {
        flex: 3,
        borderColor: COLORS.PRIMARY,
        borderWidth: 1
    },
    footer: {
        flex: 1.5,
        borderColor: COLORS.PRIMARY,
        borderWidth: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        // backgroundColor: "#000000a0"
    }
});
