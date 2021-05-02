import React from 'react'
import { Button as RNButton } from 'react-native-paper';
import { StyleSheet, View, TextInput } from 'react-native';

export function Button({ mode, buttonStyle, text, loading, ...props }) {

    const styles = StyleSheet.create({
        button: {
            margin: 10,
            borderRadius: 20,
            ...buttonStyle,
        },
        container: {

        }
    })

    return (
        <View style={styles.container}>
            <RNButton color="#985bc9" loading={loading} style={styles.button} mode={mode} onPress={() => console.log('Pressed')}>
                {text}
            </RNButton>
        </View>
    )
}

